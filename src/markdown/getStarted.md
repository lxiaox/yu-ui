# 使用

使用之前，请先[安装](#/doc/install)本组件库。

然后在代码中引入 YU UI 组件，以及样式文件：

```
import {Switch, Button, Tabs, Tab, Dialog, openDialog} from "yuuyui"
import 'yuuyui/dist/lib/yu.css'
```

Vue 单文件组件里使用：代码示例：

```
<template>
  <div><Button>按钮</Button></div>
</template>
<script>
  import {Switch, Button, Tabs, Tab, Dialog, openDialog} from "yuuyui"
  import 'yuuyui/dist/lib/yu.css'
  export default {
    components: {Button, Switch, Tabs, Tab, Dialog}
  }
</script>
```
