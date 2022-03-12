// 使用rollup打包ui组件库npm包，这是rollup配置。
// 安装rollup：yarn global add rollup
// 打包命令：rollup -c
// 最终得到 'dist/lib/yu.js' 'dist/lib/yu.css'两个文件。
// dist是项目打包路径，先上传sh deply.sh 再roll up。
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/lib/index.ts', //入口文件
  output: {
    globals: {
      vue: 'Vue',
    },
    name: 'yu',
    file: 'dist/lib/yu.js',
    format: 'umd',
    plugins: [terser()],
  },
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015',
    }),
    vue({
      include: /\.vue$/,
    }),
  ],
}
