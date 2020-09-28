<template>
<div>
  <button :class="{'checked':checked}" @click="toggle"><span></span></button>
</div>
</template>

<script lang="ts">
import {
  ref
} from 'vue'

export default {
  setup() {
    const checked = ref(false)
    const toggle = () => {
      checked.value = !checked.value
    }
    return {
      checked,
      toggle
    }
  }
}
</script>

<style lang="scss">
$h1: 22px;
$h2: $h1 - 4px;

button {
  width: $h1*2;
  height: $h1;
  background: #ddd;
  border-radius: $h1/2;
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;

  >span {
    width: $h2;
    height: $h2;
    border-radius: $h2/2;
    background: #fff;
    position: absolute;
    top: 2px;
    left: 2px;
  }

  &.checked>span {
    left: calc(100% - #{$h2} - 2px);
  }

}
</style>
