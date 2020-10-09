<template>
<div>
  <Button @click="toggle">toggle</Button>
  <Dialog :visible="visible"></Dialog>
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
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    return {
      visible,
      toggle
    }
  }
}
</script>

<style lang="scss">
  
</style>
