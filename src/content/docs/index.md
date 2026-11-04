---
title: 总览
description: 语言与计算机科学的学习记录
template: splash
hero:
  tagline: 语言 · 计算机科学 · 持续更新
  actions:
    - text: 语言
      link: language/
      variant: primary
    - text: 计算机科学
      link: computer-science/
      variant: secondary
---

## 这个站是什么

语言和计算机科学的学习笔记。内容按"大类 / 主题 / 文件"组织，侧边栏由目录自动生成。

## 怎么写笔记

1. 新内容先丢 `_inbox/`，周末归档到对应主题；
2. 从 `_templates/note.md` 复制模板，文件命名 `YYYY-MM-DD-主题.md`；
3. 每篇笔记的 frontmatter 必须带 `title`（侧边栏显示用）；
4. 提交后推送到 GitHub，Actions 自动构建并发布。

## 目录约定

- 新增语言：`src/content/docs/language/<语言>/`，复制 `english/` 的五个子目录；
- 新增学科：在 `src/content/docs/` 下建目录，并在 `astro.config.mjs` 的 sidebar 里加一组；
- 层级不超过三层，再往下用文件名表达。
