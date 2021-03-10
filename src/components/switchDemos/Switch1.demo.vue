<demo>基本用法</demo>
<template>
  <Switch v-model:value="value1" />
</template>

<script lang="ts">
import { ref } from 'vue'
import { Switch } from '../../lib/index'
export default {
  components: {
    Switch,
  },
  setup() {
    const value1 = ref(false)
    return {
      value1,
    }
  },
}
</script>