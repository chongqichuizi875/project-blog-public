// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import mdx from '@astrojs/mdx';

// https://astro.build/config
// 注：Mermaid 走客户端渲染（见 BlogPost 布局），不在构建期依赖无头浏览器。
export default defineConfig({
  // 部署在 https://chongqichuizi875.github.io/project-blog-public/ 子路径下：
  // site = 站点根地址，base = 仓库子路径前缀（影响所有静态资源/链接）。
  site: 'https://chongqichuizi875.github.io',
  base: '/project-blog-public',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    // mermaid 代码块不交给 Shiki 高亮，保留原文以便客户端渲染成流程图
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  integrations: [mdx()],
});