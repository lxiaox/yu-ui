<demo>禁用开关</demo>
<template>
  <Switch v-model:value="value4" disabled />
  <Switch v-model:value="value5" disabled />
  <Switch
    v-model:value="value6"
    active-color="#5fe676"
    inactive-color="#ff4949"
    disabled
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
    const value4 = ref(true)
    const value5 = ref(false)
    const value6 = ref(false)
    return {
      value4,
      value5,
      value6,
    }
  },
}
</script>