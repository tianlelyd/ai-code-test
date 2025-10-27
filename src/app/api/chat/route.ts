import { NextRequest } from "next/server";
import { openai } from "@/lib/openai";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") || "";

  try {
    if (contentType.startsWith("multipart/form-data")) {
      const form = await req.formData();
      const user = String(form.get("message") || "");
      const files = form.getAll("files");

      const input: any[] = [];
      if (user) input.push({ type: "text", text: user });
      for (const f of files) {
        if (f instanceof File) {
          const b = await f.arrayBuffer();
          const base64 = Buffer.from(b).toString("base64");
          input.push({
            type: "input_image",
            image_url: { url: `data:${f.type};base64,${base64}` },
          });
        }
      }

      const stream = await openai.chat.completions.stream({
        model: "gpt-5.0-mini", // ChatGPT 5 系列占位，依赖账户可用模型
        messages: [
          {
            role: "user",
            content: input.length ? input : user,
          },
        ],
        stream: true,
      });

      return new Response(stream.toReadableStream(), {
        headers: { "Content-Type": "text/event-stream" },
      });
    }

    const { messages } = await req.json();

    const stream = await openai.chat.completions.stream({
      model: "gpt-5.0-mini",
      messages,
      stream: true,
    });

    return new Response(stream.toReadableStream(), {
      headers: { "Content-Type": "text/event-stream" },
    });
  } catch (e: any) {
    return new Response(`error: ${e?.message || "unknown"}`, { status: 500 });
  }
}

