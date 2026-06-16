// 统一处理 base 路径前缀。
// 站点部署在 https://USERNAME.github.io/project-blog/ 这样的子路径下时，
// astro.config 的 base 会让 import.meta.env.BASE_URL = '/project-blog/'；
// 本地根路径部署时为 '/'。
// 所有以 '/' 开头的“站内绝对路径”（图片、内链）都应经过 withBase 处理。
const BASE = import.meta.env.BASE_URL; // 形如 '/project-blog/' 或 '/'

/** 给站内绝对路径加上 base 前缀；外链 / 相对路径原样返回。 */
export function withBase(path: string): string {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return path;
  const b = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE; // '/project-blog' 或 ''
  return b + path;
}
