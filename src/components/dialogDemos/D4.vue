<demo>绑定方法</demo>
<template>
  <Button @click="visible = true">打开对话框</Button>
  <Dialog
    v-model:visible="visible"
    :ok="ok"
    :cancel="cancel"
    :cancel-text="'不能关闭'"
  >
    给按钮绑定方法ok、cancel，点击按钮之后调用方法，如果返回false，则不能关闭
  </Dialog>
</template>
<script lang="ts">
import { ref } from 'vue'
import { Button } from '../../lib/index'
import { Dialog } from '../../lib/index'
export default {
  components: { Button, Dialog },
  setup() {
    const visible = ref(false)
    const ok = () => {
      console.log('ok')
    }
    const cancel = () => {
      return false
    }
    return { visible, ok, cancel }
  },
}
</script>
