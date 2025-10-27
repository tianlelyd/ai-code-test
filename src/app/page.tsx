import Chat from "@/components/chat/Chat";

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-3xl p-4">
      <h1 className="text-2xl font-semibold mb-4">AI Chatbot</h1>
      <Chat />
    </main>
  );
}

