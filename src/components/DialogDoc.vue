<template>
<div>
  <Button @click="toggle1">show Dialog 1</Button>
  <Dialog v-model:visible="visible1" :overlay-closable="true" :ok="ok1" :cancel="cancel1" title="你知道吗" ok-text="知道了" cancel-text="不知道" :header-visible="false" :footer-visible="false">
    <div>内容1</div>
    <div>内容2</div>
    <div>内容3</div>
  </Dialog>
  <Button @click="toggle2">show Dialog 2</Button>
  <Dialog v-model:visible="visible2" :closable="true"></Dialog>
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
    const ok1 = () => {
      console.log('ok1')
      // return false
    }
    const cancel1 = () => {
      console.log('cancel1')
      return false
    }
    return {
      visible1,
      visible2,
      toggle1,
      toggle2,
      ok1,
      cancel1
    }
  }
}
</script>

<style lang="scss">
  
</style>
