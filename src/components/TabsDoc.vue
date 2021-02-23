<template>
  <h1>tabs示例</h1>
  <Tabs v-model:selected="currentTabTitle">
    <Tab title="香蕉">
      <div>内容1</div>
    </Tab>
    <Tab title="火龙果">
      <div>内容2</div>
    </Tab>
  </Tabs>
</template>

<script>
import { ref } from 'vue'
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const currentTabTitle = ref('火龙果')
    return { currentTabTitle }
  },
}
</script>
<style lang="scss">
h1 {
  margin-bottom: 20px;
}
</style>
