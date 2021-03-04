<template>
  <div class="switch-doc">
    <Demo :component="Switch1"></Demo>
    <Demo :component="Switch2"></Demo>
    <Demo :component="Switch3"></Demo>
  </div>
</template>

<script lang="ts">
import Switch1 from './switchDemos/Switch1.demo.vue'
import Switch2 from './switchDemos/Switch2.demo.vue'
import Switch3 from './switchDemos/Switch3.demo.vue'
export default {
  setup() {
    return { Switch1, Switch2, Switch3 }
  },
}
</script>
<style lang="scss">
.switch-doc {
  .yu-switch + .yu-switch {
    margin-left: 12px;
  }
}
</style>

