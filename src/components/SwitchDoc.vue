<template>
<div>
  <h1>Switch</h1>
  <Switch v-model:value="value1" />
  <br><br>
  <h1>自定义颜色</h1>
  <Switch v-model:value="value2" activeColor="#5fe676" inactiveColor="#ff4949" />
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
    const value3 = ref(false)
    return {
      value1,
      value2,
      value3
    }
  }
}
</script>

<style lang="scss" scoped>
.yu-switch+.yu-switch {
  margin-left: 20px;
}
</style>
