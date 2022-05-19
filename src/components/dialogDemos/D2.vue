<demo>自定义样式</demo>
<template>
  <!-- 自定义页头页脚 -->
  <Button @click="visible1 = true">自定义页头页脚</Button>
  <Dialog v-model:visible="visible1">
    <template v-slot:title>
      <p style="text-align: center">
        <strong style="font-size: 20px; color: green">自定义标题</strong>
      </p>
    </template>

    <div style="width: 100%; height: 100px; font-size: 20px">
      <p>自定义内容</p>
      <p>(对话框的宽高在合适的范围内可以根据内容自适应)</p>
    </div>

    <template v-slot:footer>
      <Button @click="close">自定义按钮</Button>
    </template>
  </Dialog>
  <!-- 不带标题栏 -->
  <Button @click="visible2 = true">隐藏标题栏</Button>
  <Dialog v-model:visible="visible2" :header-visible="false">
    <p style="width: 400px; height: 100px; font-size: 24px">隐藏标题栏</p>
  </Dialog>
  <!-- 不带页脚 -->
  <Button @click="visible3 = true">隐藏页脚</Button>
  <Dialog v-model:visible="visible3" :footer-visible="false">
    <p style="width: 400px; height: 100px; font-size: 24px">隐藏页脚</p>
  </Dialog>
  <!-- 禁用右上角关闭 -->
  <Button @click="visible4 = true">禁用右上角关闭按钮</Button>
  <Dialog v-model:visible="visible4" :closable="false">
    <p style="width: 400px; height: 100px; font-size: 16px">
      禁用右上角关闭按钮
    </p>
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
    const visible3 = ref(false)
    const visible4 = ref(false)

    const close = () => {
      visible1.value = false
    }
    return { visible1, visible2, visible3, visible4, close }
  },
}
</script>
