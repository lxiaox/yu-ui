<template>
<div>
  <Button @click="toggle1">show Dialog 1</Button>
  <Dialog v-model:visible="visible1" overlay-closable="true"></Dialog>
  <Button @click="toggle2">show Dialog 2</Button>
  <Dialog v-model:visible="visible2"></Dialog>
</div>
</template>

<script lang="ts">
import {
  ref
} from 'vue'
import Dialog from "../lib/Dialog.vue"
import Button from "../lib/Button.vue"
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const visible1 = ref(false)
    const visible2 = ref(false)
    const toggle1 = () => {
      visible1.value = true
    }
    const toggle2 = () => {
      visible2.value = true
    }
    return {
      visible1,
      visible2,
      toggle1,
      toggle2,
    }
  }
}
</script>

<style lang="scss">
  
</style>
