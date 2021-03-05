<demo>改变文字</demo>
<template>
  <Button @click="visible = true">自定义文字</Button>
  <Dialog
    v-model:visible="visible"
    title-text="你知道吗"
    ok-text="知道了"
    cancel-text="不知道"
  >
    <div>内容1</div>
    <div>内容2</div>
    <div>内容3</div>
  </Dialog>
</template>
<script lang="ts">
import { ref } from 'vue'
import Button from '../../lib/Button.vue'
import Dialog from '../../lib/Dialog.vue'
export default {
  components: { Button, Dialog },
  setup() {
    const visible = ref(false)
    return { visible }
  },
}
</script>
