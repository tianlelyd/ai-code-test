# AI Chatbot (Next.js 15)

- 包管理：`pnpm`
- 框架：`Next.js 15`（App Router）
- UI：`shadcn`（基础） + `KokonutUI`（聊天相关，可按需替换组件）
- LLM：`OpenAI`，支持文本与图片输入，SSE 流式输出

## 开发

1. 安装依赖：`pnpm install`
2. 配置环境变量：`.env.local` 中包含 `OPENAI_API_KEY`
3. 启动：`pnpm dev`
4. 访问：`http://localhost:3000`

如需替换 KokonutUI 聊天气泡等 UI，可引入其组件并在 `src/components/chat/Chat.tsx` 中替换渲染。
