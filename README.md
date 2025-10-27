# AI Chatbot

基于ChatGPT-5模型的智能聊天机器人应用。

## 功能特性

- 实时流式对话
- 支持文字聊天
- 支持图片附件上传
- Markdown格式化渲染
- 代码语法高亮
- 响应式设计

## 技术栈

- **框架**: Next.js 15
- **UI组件**: shadcn/ui + kokonutui
- **包管理**: pnpm
- **样式**: Tailwind CSS
- **AI模型**: OpenAI GPT-4o
- **Markdown渲染**: react-markdown + remark-gfm + rehype-highlight

## 开始使用

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置环境变量

在项目根目录创建 `.env.local` 文件:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 4. 构建生产版本

```bash
pnpm build
pnpm start
```

## 项目结构

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # ChatGPT API路由
│   ├── globals.css               # 全局样式
│   ├── layout.tsx                # 根布局
│   └── page.tsx                  # 主页面
├── components/
│   ├── chat/
│   │   ├── chat-container.tsx    # 聊天容器组件
│   │   ├── chat-input.tsx        # 输入组件
│   │   ├── message-list.tsx      # 消息列表
│   │   └── message-content.tsx   # 消息内容渲染
│   └── ui/                       # shadcn UI组件
├── lib/
│   ├── types.ts                  # 类型定义
│   ├── utils.ts                  # 工具函数
│   └── image-utils.ts            # 图片处理工具
└── package.json
```

## 使用说明

1. 在输入框中输入消息
2. 点击图片图标可上传图片(支持JPEG、PNG、GIF、WebP,最大5MB)
3. 按Enter发送消息,Shift+Enter换行
4. AI回复支持Markdown格式,包括代码高亮

## License

MIT
