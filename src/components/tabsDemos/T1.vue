<demo>基本用法</demo>
<template>
  <Tabs v-model:selected="currentTabTitle">
    <Tab title="香蕉">
      <div>香蕉</div>
      <div>香蕉</div>
      <div>香蕉</div>
    </Tab>
    <Tab title="火龙果">
      <div>火龙果</div>
      <div>火龙果</div>
      <div>火龙果</div>
    </Tab>
    <Tab title="苹果">
      <div>苹果</div>
      <div>苹果</div>
      <div>苹果</div>
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
    const currentTabTitle = ref('香蕉')
    return { currentTabTitle }
  },
}
</script>