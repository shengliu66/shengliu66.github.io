# 部署到 GitHub Pages

网站已经配置成可以纯静态导出，所有页面（Home / Research / News / Gallery）都会预渲染成真实的 HTML，交互（gallery 灯箱、头像悬停、移动端菜单）全部保留。

## 一次性设置

1. 把项目同步到 GitHub 仓库。
2. 仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。
3. 如果是**项目页**（`用户名.github.io/仓库名`），把 `.github/workflows/deploy.yml` 里的
   `BASE_PATH: /` 改成 `BASE_PATH: /仓库名/`。
   如果是**用户页**（`用户名.github.io`）或自定义域名，保持 `/`。

## 之后怎么更新

在 Lovable 里改内容 → 同步到 GitHub → push 到 `main`，Actions 会自动构建并发布。

## 本地构建

```bash
npm install
npm run build:static      # 产物在 dist/client
npx serve dist/client     # 本地预览
```

构建脚本会自动：预渲染所有页面、生成 `404.html` 深链接回退、写入 `.nojekyll`、
并把外链托管的图片下载进产物目录（站点不依赖 Lovable 托管）。
