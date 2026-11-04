import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// 部署在 https://veronicallti.github.io/learn/
export default defineConfig({
  site: 'https://veronicallti.github.io',
  base: '/learn',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Veronica 的学习笔记',
      description: '语言与计算机科学的学习记录',
      defaultLocale: 'root',
      locales: {
        root: { label: '简体中文', lang: 'zh-CN' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Veronicallti' },
      ],
      sidebar: [
        { label: '语言', items: [{ autogenerate: { directory: 'language' } }] },
        { label: '计算机科学', items: [{ autogenerate: { directory: 'computer-science' } }] },
      ],
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/Veronicallti/learn/edit/main/',
      },
    }),
  ],
});
