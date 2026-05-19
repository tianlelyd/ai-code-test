# ai-code-test
codex、claude code、gemini cli 等等ai code 工具测试


# 创建工作树同时新建分支：
```
git worktree add -b <新分支名> <路径> <基于的分支>
git worktree add -b copyweb-20251209 worktrees/copyweb-20251209 main
```

## Scream 运动饮料瓶建模产出

本分支包含基于参考图片主体理解后重建的 Scream 风格运动饮料瓶模型：

- `build_scream_sports_drink_model.py`：Blender Python 生成脚本
- `outputs/scream_bottle_model.blend`：可编辑 Blender 工程
- `outputs/scream_bottle_model.glb`：可导入的 GLB 模型
- `outputs/scream_bottle_preview.png`：渲染预览图
