"use client";
import { useEffect, useRef, useState } from "react";

type Msg = { id: string; role: "user" | "assistant"; content: string; images?: string[] };

export default function Chat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    if (!input && files.length === 0) return;
    const id = Math.random().toString(36).slice(2);
    const userMsg: Msg = { id, role: "user", content: input, images: [] };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    const assistantId = id + "-a";
    setMessages((m) => [...m, { id: assistantId, role: "assistant", content: "" }]);

    let res: Response;
    if (files.length) {
      const form = new FormData();
      form.append("message", userMsg.content);
      files.forEach((f) => form.append("files", f));
      res = await fetch("/api/chat", { method: "POST", body: form });
    } else {
      res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages
            .concat(userMsg)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });
    }

    if (!res.ok || !res.body) {
      setLoading(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let acc = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      acc += decoder.decode(value, { stream: true });
      setMessages((m) =>
        m.map((x) => (x.id === assistantId ? { ...x, content: acc } : x))
      );
    }
    setLoading(false);
    setFiles([]);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="border rounded-md p-3 h-[60vh] overflow-y-auto bg-white/50">
        {messages.map((m) => (
          <div key={m.id} className="mb-3">
            <div className="text-xs text-gray-500 mb-1">{m.role === "user" ? "你" : "助手"}</div>
            <Message content={m.content} />
          </div>
        ))}
        {loading && <div className="text-sm text-gray-400">生成中…</div>}
        <div ref={bottomRef} />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files || []))}
        />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
          placeholder="输入消息，回车发送"
          className="flex-1 border rounded-md px-3 py-2"
        />
        <button onClick={send} className="px-3 py-2 bg-black text-white rounded-md disabled:opacity-50" disabled={loading}>发送</button>
      </div>
    </div>
  );
}

function Message({ content }: { content: string }) {
  // 简单富文本渲染：支持代码块与行内代码
  const parts = parseMarkdownLite(content);
  return (
    <div className="prose prose-sm max-w-none">
      {parts.map((p, i) =>
        p.type === "code" ? (
          <pre key={i} className="bg-gray-100 p-2 rounded"><code>{p.text}</code></pre>
        ) : p.type === "inline" ? (
          <code key={i} className="bg-gray-100 px-1 rounded">{p.text}</code>
        ) : (
          <span key={i}>{p.text}</span>
        )
      )}
    </div>
  );
}

function parseMarkdownLite(text: string): { type: "text" | "code" | "inline"; text: string }[] {
  const out: { type: "text" | "code" | "inline"; text: string }[] = [];
  if (!text) return out;
  let i = 0;
  while (i < text.length) {
    const block = text.indexOf("```", i);
    const inline = text.indexOf("`", i);
    if (block !== -1 && (inline === -1 || block < inline)) {
      if (block > i) out.push({ type: "text", text: text.slice(i, block) });
      const end = text.indexOf("```", block + 3);
      if (end !== -1) {
        out.push({ type: "code", text: text.slice(block + 3, end) });
        i = end + 3;
      } else {
        out.push({ type: "text", text: text.slice(block) });
        break;
      }
    } else if (inline !== -1) {
      if (inline > i) out.push({ type: "text", text: text.slice(i, inline) });
      const end = text.indexOf("`", inline + 1);
      if (end !== -1) {
        out.push({ type: "inline", text: text.slice(inline + 1, end) });
        i = end + 1;
      } else {
        out.push({ type: "text", text: text.slice(inline) });
        break;
      }
    } else {
      out.push({ type: "text", text: text.slice(i) });
      break;
    }
  }
  return out;
}
