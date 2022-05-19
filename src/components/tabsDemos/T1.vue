<demo>基本用法</demo>
<template>
  <Tabs v-model:selected="currentTabTitle">
    <Tab title="标签一">
      <div>标签一的内容</div>
    </Tab>
    <Tab title="标签二">
      <div>标签二的内容</div>
    </Tab>
    <Tab title="标签三">
      <div>标签三的内容</div>
    </Tab>
  </Tabs>
</template>

<script>
import { ref } from 'vue'
import { Tabs, Tab } from '../../lib/index'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const currentTabTitle = ref('标签一')
    return { currentTabTitle }
  },
}
</script>