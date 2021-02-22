<template>
  <h1>tabs示例</h1>
  <Tabs v-model:selected="currentTabTitle">
    <Tab title="标题1">
      <div>内容1</div>
    </Tab>
    <Tab title="标题2">
      <div>内容2</div>
    </Tab>
  </Tabs>
</template>

<script>
import { ref } from 'vue'
import Tabs from '../lib/tabs.vue'
import Tab from '../lib/tab.vue'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const currentTabTitle = ref('标题1')
    return { currentTabTitle }
  },
}
</script>
<style lang="scss">
h1 {
  margin-bottom: 20px;
}
</style>
