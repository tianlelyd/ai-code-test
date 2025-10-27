"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Message } from "@/lib/types";
import { MessageContent } from "./message-content";
import { Bot, User } from "lucide-react";

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === "assistant" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <Avatar className="h-8 w-8 shrink-0">
              <div className="flex h-full w-full items-center justify-center bg-muted">
                {message.role === "assistant" ? (
                  <Bot className="h-4 w-4" />
                ) : (
                  <User className="h-4 w-4" />
                )}
              </div>
            </Avatar>
            <div
              className={`flex-1 space-y-2 ${
                message.role === "assistant" ? "items-start" : "items-end"
              }`}
            >
              <div
                className={`inline-block rounded-lg px-4 py-2 ${
                  message.role === "assistant"
                    ? "bg-muted"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {message.image && (
                  <img
                    src={message.image}
                    alt="Uploaded"
                    className="mb-2 max-w-sm rounded-md"
                  />
                )}
                <MessageContent
                  content={message.content}
                  role={message.role}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
