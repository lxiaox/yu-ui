<template>
  <div class="button-doc">
    <Demo :component="Button1"></Demo>
    <Demo :component="Button2"></Demo>
    <Demo :component="Button3"></Demo>
    <Demo :component="Button4"></Demo>
    <Demo :component="Button5"></Demo>
  </div>
</template>

<script lang="ts">
import Button1 from './buttonDemos/Button1.demo.vue'
import Button2 from './buttonDemos/Button2.demo.vue'
import Button3 from './buttonDemos/Button3.demo.vue'
import Button4 from './buttonDemos/Button4.demo.vue'
import Button5 from './buttonDemos/Button5.demo.vue'
export default {
  setup() {
    return { Button1, Button2, Button3, Button4, Button5 }
  },
}
</script>

<style lang="scss">
.button-doc {
  h1 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .demo-component .yu-btn {
    margin: 8px 16px 8px 0;
  }
}
</style>
