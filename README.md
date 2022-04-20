# yu-ui

### 1 启动服务

`vite`

命令：`yarn dev` 或 `npm run dev`

### 2 打包项目，发布官网

`vite build`

命令：`yarn build`

配置文件：`vite.config.js`

打包官网 + 上传 github/gitee 快捷方式： `sh deploy.sh`

### 3 打包 ui 组件库

在终端直接使用命令： `rollup -c`

配置文件：`rollup.config.js`

##### 发布

发布到 npm：`npm login` `npm publish`

配置在：`package.json`
