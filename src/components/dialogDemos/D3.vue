<demo>调用方法打开对话框</demo>
<template>
  <Button @click="showDialog">显示对话框</Button>
</template>
<script lang="ts">
import { h } from 'vue'
import { Button, openDialog } from '../../lib/index'
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        ok: () => {
          console.log('ok')
        },
        cancel: () => {
          console.log('cancel')
          return false
        },
        // title: h('strong', 'slot title'),
        content: h(
          'p',
          { style: 'font-size:16px;' },
          '在JS中使用 openDialog 方法打开对话框，不需要在模板中书写<Dialog>组件'
        ),
        overlayClosable: true,
        headerVisible: true,
        okText: '点击关闭',
        cancelText: '不能关闭',
        closable: false,
      })
    }
    return { showDialog }
  },
}
</script>