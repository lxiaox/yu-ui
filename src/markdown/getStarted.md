# 使用

使用之前，请先[安装](#/doc/install)本组件库。


然后在代码中引入YU UI组件，以及样式文件：

```
import {Switch, Button, Tabs, Tab, Dialog, openDialog} from "yuuyui"
import 'yuuyui/dist/lib/yu.css'
```

Vue单文件组件里使用：代码示例：

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

注意：在下面组件介绍页的示例代码中，引入路径为 `import { 组件名 } from '../../lib/index'`，需要改成 `import { 组件名 } from 'yuuyui'`