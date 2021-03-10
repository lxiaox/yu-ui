<demo>基本用法</demo>
<template>
  <Button>默认按钮</Button>
  <Button theme="primary">主要按钮</Button>
  <Button theme="text">文本按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button theme="success">成功按钮</Button>
  <Button theme="warning">警告按钮</Button>
  <Button theme="error">危险按钮</Button>
</template>
<script lang="ts">
import { Button } from '../../lib/index'
export default {
  components: { Button },
}
</script>
