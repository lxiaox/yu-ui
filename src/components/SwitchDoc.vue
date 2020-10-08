<template>
<div>
  <h1>Switch</h1>
  <Switch v-model:value="value1" />
  <h1>自定义颜色</h1>
  <Switch v-model:value="value2" active-color="#5fe676" inactive-color="#ff4949" />
  <Switch v-model:value="value3" active-color="#5fe676" inactive-color="#e6a23c" />
  <h1>禁用状态</h1>
  <Switch v-model:value="value4" disabled />
  <Switch v-model:value="value5" disabled />
  <Switch v-model:value="value6" active-color="#5fe676" inactive-color="#ff4949" disabled />
</div>
</template>

<script lang="ts">
import {
  ref
} from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  components: {
    Switch
  },
  setup() {
    const value1 = ref(false)
    const value2 = ref(false)
    const value3 = ref(true)
    const value4 = ref(true)
    const value5 = ref(false)
    const value6 = ref(false)
    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
    }
  }
}
</script>

<style lang="scss" scoped>
.yu-switch+.yu-switch {
  margin-left: 20px;
}

h1 {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
