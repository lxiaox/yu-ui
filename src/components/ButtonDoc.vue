<template>
<div>
  <h1>基础类型</h1>
  <Button>默认按钮</Button>
  <Button theme="primary">主要按钮</Button>
  <Button theme="text">文本按钮</Button>
  <Button theme="link">链接按钮</Button>
  <br>
  <br>
  <Button theme="success">成功按钮</Button>
  <Button theme="warning">警告按钮</Button>
  <Button theme="error">危险按钮</Button>
  <h1>不同尺寸</h1>
  <Button size="big">大型按钮</Button>
  <Button>默认按钮</Button>
  <Button size="small">小型按钮</Button>
  <Button size="mini">超小按钮</Button>
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
  margin-top: 20px;
  margin-bottom: 20px;
}

.yu-btn+.yu-btn {
  margin-left: 20px;
}
</style>
