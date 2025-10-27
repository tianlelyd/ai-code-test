import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const processedMessages = messages.map((msg: any) => {
    if (msg.role === "user" && msg.image) {
      return {
        role: "user",
        content: [
          { type: "text", text: msg.content },
          {
            type: "image_url",
            image_url: {
              url: msg.image,
            },
          },
        ],
      };
    }
    return {
      role: msg.role,
      content: msg.content,
    };
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: processedMessages,
    stream: true,
  });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || "";
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
      } catch (error) {
        controller.error(error);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
