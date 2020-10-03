<template>
<div>
  <h1>基础类型</h1>
  <Button>按钮</Button>
  <Button theme="primary">按钮</Button>
  <Button theme="text">按钮</Button>
  <Button theme="link">按钮</Button>
  <br>
  <br>
  <Button theme="success">按钮</Button>
  <Button theme="warning">按钮</Button>
  <Button theme="error">按钮</Button>
</div>
</template>

<script>
import Button from '../lib/Button.vue'
export default {
  components: {
    Button
  },
}
</script>

<style lang="scss">
h1 {
  margin-bottom: 20px;
}

.yu-btn+.yu-btn {
  margin-left: 20px;
}
</style>
