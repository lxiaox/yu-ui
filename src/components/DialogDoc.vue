<template>
  <div class="dialog-doc">
    <Demo :component="D1"></Demo>
    <Demo :component="D2"></Demo>
    <Demo :component="D4"></Demo>
    <Demo :component="D3"></Demo>
  </div>
</template>

<script lang="ts">
import D1 from './dialogDemos/D1.vue'
import D2 from './dialogDemos/D2.vue'
import D3 from './dialogDemos/D3.vue'
import D4 from './dialogDemos/D4.vue'
export default {
  components: {
    D1,
    D2,
    D3,
    D4,
  },
  setup() {
    return { D1, D2, D3, D4 }
  },
}
</script>

<style lang="scss">
.dialog-doc {
  .yu-btn {
    margin: 8px 16px 8px 0;
  }
}
</style>
