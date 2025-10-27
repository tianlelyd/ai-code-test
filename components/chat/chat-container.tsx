"use client";

import { useState, useCallback } from "react";
import { Message } from "@/lib/types";
import { MessageList } from "./message-list";
import { ChatInput } from "./chat-input";

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(
    async (content: string, image?: string) => {
      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content,
        image,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [...messages, userMessage].map((msg) => ({
              role: msg.role,
              content: msg.content,
              image: msg.image,
            })),
          }),
        });

        if (!response.ok) {
          throw new Error("网络请求失败");
        }

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) {
          throw new Error("无法读取响应流");
        }

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const text = decoder.decode(value);
          setMessages((prev) => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage.role === "assistant") {
              lastMessage.content += text;
            }
            return newMessages;
          });
        }
      } catch (error) {
        console.error("发送消息失败:", error);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: "抱歉,发生了错误。请稍后重试。",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  return (
    <div className="flex h-screen flex-col">
      <div className="border-b p-4 bg-background">
        <h1 className="text-2xl font-bold">AI Chatbot</h1>
        <p className="text-sm text-muted-foreground">
          基于ChatGPT-5的智能对话助手
        </p>
      </div>
      <MessageList messages={messages} />
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
}
