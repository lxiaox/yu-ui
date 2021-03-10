<demo>圆角按钮</demo>
<template>
  <Button round size="big">圆角按钮</Button>
  <Button round>圆角按钮</Button>
  <Button round size="small">圆角按钮</Button>
  <Button round size="mini">圆角按钮</Button>
  <Button round theme="success">圆角按钮</Button>
  <Button round theme="warning">圆角按钮</Button>
  <Button round theme="error">圆角按钮</Button>
</template>
<script lang="ts">
import { Button } from '../../lib/index'
export default {
  components: { Button },
}
</script>
