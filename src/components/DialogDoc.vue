<template>
  <div>
    <Button @click="toggle1">普通用法</Button>
    <Button @click="toggle2">插槽示例</Button>
    <!-- dialog1 -->
    <Dialog
      v-model:visible="visible1"
      :overlay-closable="true"
      :closable="true"
      :ok="ok1"
      :cancel="cancel1"
      title="你知道吗"
      ok-text="知道了"
      cancel-text="不知道"
      :header-visible="true"
      :footer-visible="true"
    >
      <div>内容1</div>
      <div>内容2</div>
      <div>内容3</div>
    </Dialog>
    <!-- dialog2 -->
    <Dialog v-model:visible="visible2">
      <!-- 标题 -->
      <template v-slot:title>
        <strong style="color: red">slot标题</strong>
      </template>
      <!-- 内容 -->
      <strong style="color: green">slot内容</strong>
      <!-- footer -->
      <template v-slot:footer>
        <Button @click="close2">slot按钮</Button>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible1 = ref(false)
    const visible2 = ref(false)
    const toggle1 = () => {
      visible1.value = true
    }
    const toggle2 = () => {
      visible2.value = true
    }
    const ok1 = () => {
      console.log('ok1')
      // return false
    }
    const cancel1 = () => {
      console.log('cancel1')
      return false
    }
    const close2 = () => {
      visible2.value = false
    }
    return {
      visible1,
      visible2,
      toggle1,
      toggle2,
      ok1,
      cancel1,
      close2,
    }
  },
}
</script>

<style lang="scss" scoped>
.yu-btn + .yu-btn {
  margin-left: 20px;
}
</style>
