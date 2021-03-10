<demo>自定义颜色</demo>
<template>
  <Switch
    v-model:value="value2"
    active-color="#5fe676"
    inactive-color="#ff4949"
  />
  <Switch
    v-model:value="value3"
    active-color="#5fe676"
    inactive-color="#e6a23c"
  />
</template>

<script lang="ts">
import { ref } from 'vue'
import { Switch } from '../../lib/index'
export default {
  components: {
    Switch,
  },
  setup() {
    const value2 = ref(false)
    const value3 = ref(true)
    return {
      value2,
      value3,
    }
  },
}
</script>