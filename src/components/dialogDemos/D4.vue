<demo>绑定方法</demo>
<template>
  <Button @click="visible1 = true">打开对话框</Button>
  <Dialog
    v-model:visible="visible1"
    :ok="ok"
    title-text="绑定方法"
    :cancel="cancel"
    ok-text="可以关闭"
    cancel-text="不能关闭"
  >
    <p style="font-size: 18px">
      给按钮绑定callback，如果callback返回false，则不能关闭
    </p>
  </Dialog>
  <Button @click="visible2 = true">校验示例</Button>
  <Dialog
    v-model:visible="visible2"
    title-text="请输入abc"
    ok-text="校验"
    cancel-text="取消"
    :ok="check"
  >
    <input
      type="text"
      v-model="checkValue"
      placeholder="只有输入abc才能通过校验"
    />
  </Dialog>
</template>
<script lang="ts">
import { ref } from 'vue'
import { Button, Dialog } from '../../lib/index'
export default {
  components: { Button, Dialog },
  setup() {
    const visible1 = ref(false)
    const visible2 = ref(false)
    const checkValue = ref('')
    const ok = () => {
      console.log('ok')
    }
    const cancel = () => {
      return false
    }
    const check = () => {
      if (checkValue.value !== 'abc') return false
    }
    return { visible1, visible2, ok, cancel, check, checkValue }
  },
}
</script>
<style lang="scss" scoped>
input {
  width: 300px;
  height: 36px;
  padding: 4px;
  outline: none;
}
</style>
