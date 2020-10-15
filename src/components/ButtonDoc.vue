<template>
  <div>
    <h1>基础类型</h1>
    <Button>默认按钮</Button>
    <Button theme="primary">主要按钮</Button>
    <Button theme="text">文本按钮</Button>
    <Button theme="link">链接按钮</Button>
    <br /><br />
    <Button theme="success">成功按钮</Button>
    <Button theme="warning">警告按钮</Button>
    <Button theme="error">危险按钮</Button>
    <h1>不同尺寸</h1>
    <Button size="big">大型按钮</Button>
    <Button>默认按钮</Button>
    <Button size="small">小型按钮</Button>
    <Button size="mini">超小按钮</Button>
    <h1>圆角按钮</h1>
    <Button round size="big">圆角按钮</Button>
    <Button round>圆角按钮</Button>
    <Button round size="small">圆角按钮</Button>
    <Button round size="mini">圆角按钮</Button>
    <br /><br />
    <Button round theme="success">圆角按钮</Button>
    <Button round theme="warning">圆角按钮</Button>
    <Button round theme="error">圆角按钮</Button>
    <h1>禁用状态</h1>
    <Button disabled>禁用按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <br /><br />
    <Button theme="primary" disabled>主要按钮</Button>
    <Button theme="success" disabled>成功按钮</Button>
    <Button theme="warning" disabled>警告按钮</Button>
    <Button theme="error" disabled>危险按钮</Button>
    <h1>加载中</h1>
    <Button theme="primary" loading>加载中</Button>
    <Button loading>加载中</Button>
    <Button size="small" loading>加载中</Button>
    <Button size="mini" loading>加载中</Button>
  </div>
</template>

<script>
import Button from '../lib/Button.vue'
export default {
  components: {
    Button,
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 20px;
  margin-bottom: 20px;
}

.yu-btn + .yu-btn {
  margin-left: 14px;
}
</style>
