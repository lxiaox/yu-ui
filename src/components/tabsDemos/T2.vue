<demo>禁用某项</demo>
<template>
  <Tabs v-model:selected="currentTabTitle">
    <Tab title="香蕉">
      <div>香蕉</div>
    </Tab>
    <Tab title="火龙果">
      <div>火龙果</div>
    </Tab>
    <Tab title="西红柿" disabled>
      <div>西红柿</div>
    </Tab>
  </Tabs>
</template>

<script>
import { ref } from 'vue'
import { Tabs } from '../../lib/index'
import { Tab } from '../../lib/index'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const currentTabTitle = ref('香蕉')
    return { currentTabTitle }
  },
}
</script>