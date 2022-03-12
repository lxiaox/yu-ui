// vite 本地服务/打包配置
import { md } from './plugins/md'
import fs from 'fs'
export default {
  assetsDir: 'assets',
  base: './',
  plugins: [md()], // 展示md介绍文字的插件，
  vueCustomBlockTransforms: {
    demo: ({ code, path }) => {
      // code：是<demo>xxx</demo>中间的xxx，path：文件路径，
      // 调试方法：console.log(code)在终端/命令行查看
      const file = fs.readFileSync(path).toString() // 文件内容字符串
      const main = file
        .split(`<demo>${code}</demo>`)
        .join('')
        .trim()
        .replace(/\.\.\/\.\.\/lib\/index/, 'yuuyui')
      // split()：把<demo>...</demo>这一段去除，得到：['','后面内容']，
      // join()：拼接起来，
      // trim()：去除空白字符，
      // replace()：将引入路径 '../../lib/index' 替换为 'yuuyui'

      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(code)}
      }`.trim()
    },
  },
}
