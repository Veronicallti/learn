# learn

语言与计算机科学的学习笔记。仓库本身是一个 [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) 站点，Markdown 直接放在 `src/content/docs/` 下，推送即发布。

- 线上地址：<https://veronicallti.github.io/learn/>
- 本地预览：`npm install && npm run dev`
- 构建：`npm run build`（产物在 `dist/`）

## 目录结构

```
learn/
├── src/
│   ├── content.config.ts        # 内容集合（docs / i18n）
│   ├── content/docs/            # ← 所有笔记都在这里
│   │   ├── index.md             # 站点首页
│   │   ├── language/
│   │   │   ├── index.md
│   │   │   ├── english/{index.md,notes,vocabulary,grammar,practice,resources}
│   │   │   └── japanese/…
│   │   └── computer-science/
│   │       ├── index.md
│   │       ├── 00-foundations/
│   │       ├── 01-programming/{index.md,python,c,cpp,javascript}
│   │       ├── 02-math/ 03-algorithms/ 04-data-and-databases/
│   │       ├── 05-systems/ 06-ai-ml/ 07-projects/ 99-resources/
│   ├── styles/custom.css        # 主题色
│   └── content/i18n/            # UI 文案（暂时空）
├── public/favicon.svg
├── _inbox/                      # 收件箱，不参与构建
├── _templates/note.md           # 笔记模板
├── astro.config.mjs             # site / base / 侧边栏
└── .github/workflows/deploy.yml # 推送到 main 自动发布
```

## 写笔记

1. 新东西先丢 `_inbox/`，周末归档到对应主题目录。
2. 从 `_templates/note.md` 复制，命名为 `YYYY-MM-DD-主题.md`。
3. **frontmatter 必须有 `title`**（Starlight 用它生成页面标题和侧边栏），否则构建失败。
4. 想控制侧边栏顺序，加：

```yaml
sidebar:
  order: 3
  label: 显示名称
```

5. `git add -A && git commit -m "note: xxx" && git push`，约 1 分钟后线上生效。

## 新增分类

- **新语言**：`cp -r src/content/docs/language/english src/content/docs/language/korean`，改 `index.md` 的标题；侧边栏自动出现。
- **新学科**：在 `src/content/docs/` 下建目录并写 `index.md`，然后在 `astro.config.mjs` 的 `sidebar` 里加一组：

```js
{ label: '数学', items: [{ autogenerate: { directory: 'math' } }] },
```

## 部署

仓库 Settings → Pages → **Source 选 "GitHub Actions"**，之后推到 `main` 即自动构建发布到 `https://veronicallti.github.io/learn/`。

> 站点部署在子路径 `/learn`，`astro.config.mjs` 里的 `base: '/learn'` 和仓库名必须一致。若以后换到自定义域名或根路径，需要同步修改。

## 约定

- 层级不超过 3 层，再往下用文件名表达。
- 大文件（教材 PDF、视频）不要提交进 Git：单文件上限 100MB，仓库建议 <1GB，放网盘后在笔记里贴链接。
