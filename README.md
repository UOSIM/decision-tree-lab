# 决策树探究实验室

零食健康判断主题的决策树教学互动实验，包含概念学习、特征探究、多层决策树和智能推理等活动。

在线访问：<https://wisonlin.github.io/decision-tree-lab/>

## 本地使用

下载整个项目后打开 `index.html`。请保留 `app.js`、`styles.css` 和 `assets` 的相对位置。

这是纯静态 HTML/CSS/JavaScript 项目，无需安装依赖、构建或配置后端。

## GitHub Pages 部署与更新

仓库的 **Settings → Pages** 使用 **Deploy from a branch**，发布来源为 **main / (root)**。

`.nojekyll` 用于跳过 Jekyll 处理。提交并推送到 `main` 后，GitHub Pages 会自动重新发布。

```bash
git add .
git commit -m "Update decision tree lab"
git push origin main
```

实验单的“保存”将数据写入当前浏览器的本地存储，不会上传到服务器，也不会跨设备同步。“导出实验单 PDF”通过浏览器打印功能完成。
