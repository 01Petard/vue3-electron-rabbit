# Electron-Vue3开发桌面应用模板

#### 介绍
Electron-Vue3开发桌面应用模板


#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)

#### `electron/main.js`解释

1. **检查开发模式**：

   - 使用 `process.env.NODE_ENV !== 'production'` 来判断是否处于开发模式。你可以通过设置环境变量 `NODE_ENV` 来控制这一点。

2. **加载不同的 URL**：

   - 如果处于开发模式，加载 Vite 开发服务器提供的页面 `http://localhost:3000`。
   - 如果处于生产模式，加载打包后的文件 `file://${indexPath}`。

3. **启动 Electron 应用**：

   - 在开发模式下，确保 Vite 开发服务器已经启动。你可以通过以下命令启动 Vite 开发服务器：

     bash深色版本

     ```
     npx vite
     ```

   - 在另一个终端窗口中启动 Electron 应用：

     bash深色版本

     ```
     NODE_ENV=development electron .
     ```

这样，每次你修改 Vue 项目中的代码时，Vite 开发服务器会自动重新加载页面，而无需重新打包整个项目。Electron 应用会直接从 Vite 开发服务器加载最新的代码。
