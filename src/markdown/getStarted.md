# 使用

使用之前，请先[安装](#/doc/install)。

引入YU UI

```
import {Button, Tabs, Switch, Dialog} from "yuuyui"
import 'yuuyui/dist/lib/yu.css'
```

代码示例：

```
<template>
  <div><Button>按钮</Button></div>
</template>
<script>
  import {Button, Tabs, Tab, Switch, Dialog, openDIalog} from "yuuyui"
  import 'yuuyui/dist/lib/yu.css'
  export default {
    components: {Button, Switch, Tabs, Tab, Dialog}
  }
</script>
```