# 学习资料库

## 目录结构

```
learn/
├── _inbox/                # 收件箱：随手存，周末整理归档
├── _templates/            # 笔记 / 项目模板
├── language/              # 语言类
│   ├── README.md
│   ├── english/
│   └── japanese/
└── computer-science/      # 计算机类
    ├── README.md
    ├── 00-foundations/    # 计算机组成、操作系统、网络等基础
    ├── 01-programming/    # 编程语言（按语言再分）
    ├── 02-math/           # 数学基础
    ├── 03-algorithms/     # 数据结构与算法
    ├── 04-data-and-databases/
    ├── 05-systems/        # Linux / 网络 / 分布式
    ├── 06-ai-ml/
    ├── 07-projects/       # 动手项目代码
    └── 99-resources/      # 书、课程、链接
```

## 约定

1. **顶层只放大类**（domain）。以后新增方向直接建同级目录，例如 `math/`、`design/`、`economics/`，不影响已有结构。
2. **每个大类一个 README.md**，当作该类的索引 / 学习路线，不再往下到处放 README。
3. **层级控制在 3 层以内**：`大类 / 主题 / 文件`。第 4 层用文件名表达，不要用目录。
4. **文件命名**：`YYYY-MM-DD-主题.md`，例如 `2025-11-04-tcp-handshake.md`。同一天的序号可加后缀 `-2`。
5. **数字前缀**只用于希望固定排序的分类（`00-`、`99-resources`）；中间新增分类直接用名字，避免反复重命名。
6. **下划线开头**的目录（`_inbox`、`_templates`）是工具目录，排在列表最前，不算学习内容。
7. **代码与笔记分开**：项目的代码放 `computer-science/07-projects/项目名/`，学习笔记仍留在对应知识点目录，笔记里链接到项目。
8. 资料原文（PDF、课件、音频）放各主题的 `resources/`，自己写的东西放 `notes/`，避免混在一起。

## 新增一个领域的做法

```bash
# 新增一门语言
cp -r language/english language/korean

# 新增一个大类
mkdir -p design/{notes,resources} && touch design/README.md
```

## 归档节奏

- 日常：一切新东西先丢 `_inbox/`，不用想放哪。
- 每周：`_inbox/` 清空，归入对应主题；在主题 README 里加一行索引。
- 每月：回看 README 索引，删掉过时的，补上"待学"清单。
