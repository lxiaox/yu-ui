import {md} from './plugins/md';
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'
export default {
  assetsDir: 'assets',
  base:'./',
  plugins: [md()],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => (n as any).tag === 'demo')
      const title = (parsed as any).children[0].content
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${
        JSON.stringify(main)
        }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    }
  }
}
