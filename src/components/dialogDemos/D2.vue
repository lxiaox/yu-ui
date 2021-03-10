<demo>自定义样式</demo>
<template>
  <!-- 自定义页头页脚 -->
  <Button @click="visible1 = true">自定义页头页脚</Button>
  <Dialog v-model:visible="visible1">
    <template v-slot:title>
      <p style="text-align: center">
        <strong style="font-size: 20px; color: red">slot标题(使用插槽)</strong>
      </p>
    </template>
    <p style="color: green">slot内容</p>
    <template v-slot:footer>
      <Button @click="close">slot按钮(使用插槽)</Button>
    </template>
  </Dialog>
  <!-- 不带标题栏 -->
  <Button @click="visible2 = true">不带标题栏</Button>
  <Dialog v-model:visible="visible2" :header-visible="false">
    <p>不带标题栏</p>
  </Dialog>
  <!-- 不带页脚 -->
  <Button @click="visible3 = true">不带页脚</Button>
  <Dialog v-model:visible="visible3" :footer-visible="false">
    <p>不带页脚</p>
  </Dialog>
  <!-- 禁用右上角关闭 -->
  <Button @click="visible4 = true">禁用右上角关闭</Button>
  <Dialog v-model:visible="visible4" :closable="false">
    <p>禁用右上角关闭</p>
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
    const visible4 = ref(false)

    const close = () => {
      visible1.value = false
    }
    return { visible1, visible2, visible3, visible4, close }
  },
}
</script>
