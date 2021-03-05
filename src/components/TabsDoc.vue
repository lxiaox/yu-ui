<template>
  <Demo :component="T1"></Demo>
  <Demo :component="T2"></Demo>
</template>

<script>
import T1 from './tabsDemos/T1.vue'
import T2 from './tabsDemos/T2.vue'
export default {
  setup() {
    return { T1, T2 }
  },
}
</script>
