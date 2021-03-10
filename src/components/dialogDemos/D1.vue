<demo>基本用法</demo>
<template>
  <Button @click="visible1 = true">打开对话框</Button>
  <Dialog v-model:visible="visible1">
    <div>内容1</div>
    <div>内容2</div>
    <div>内容3</div>
  </Dialog>
  <!-- 自定义标题、按钮文字 -->
  <Button @click="visible2 = true">自定义文字</Button>
  <Dialog
    v-model:visible="visible2"
    title-text="你知道吗"
    ok-text="知道了"
    cancel-text="不知道"
  >
    <div>自定义标题、按钮文字</div>
    <div>自定义标题、按钮文字</div>
    <div>自定义标题、按钮文字</div>
  </Dialog>
  <!-- 点击遮罩层可以关闭对话框 -->
  <Button @click="visible3 = true">点击遮罩层关闭</Button>
  <Dialog v-model:visible="visible3" :overlay-closable="true">
    <div>点击遮罩层可关闭</div>
    <div>点击遮罩层可关闭</div>
    <div>点击遮罩层可关闭</div>
  </Dialog>
</template>
<script lang="ts">
import { ref } from 'vue'
import { Button } from '../../lib/index'
import { Dialog } from '../../lib/index'
export default {
  components: { Button, Dialog },
  setup() {
    const visible1 = ref(false)
    const visible2 = ref(false)
    const visible3 = ref(false)
    return { visible1, visible2, visible3 }
  },
}
</script>
