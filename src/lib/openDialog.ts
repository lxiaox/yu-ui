import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'
export const openDialog = (options) => {
  // 获取参数
  const {
    ok,
    cancel,
    overlayClosable,
    closable,
    titleText,
    okText,
    cancelText,
    headerVisible,
    footerVisible,
    title,
    content,
    footer,
  } = options
  // 注销Dialog函数
  const close = () => {
    app.unmount()
    div.remove()
  }
  // 把div添加到body上
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
              close()
            }
          },
          ok,
          cancel,
          overlayClosable,
          closable,
          titleText,
          okText,
          cancelText,
          headerVisible,
          footerVisible,
        },
        {
          title,
          default: content,
          footer,
        }
      )
    },
  })
  app.mount(div)
}
