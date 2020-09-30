<template>
<div>
  <button :class="{'checked':value}" @click="toggle"><span></span></button>
</div>
</template>

<script lang="ts">
import {
  ref
} from 'vue'

export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('toogleSwitch', !props.value)
    }
    return {
      toggle
    }
  }
}
</script>

<style lang="scss">
$h1: 22px;
$h2: $h1 - 4px;
$w: 6px;

button {
  width: $h1*2;
  height: $h1;
  background: #ddd;
  border-radius: $h1/2;
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all .3s;

  >span {
    width: $h2;
    height: $h2;
    border-radius: $h2/2;
    background: #fff;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all .3s;
  }

  &.checked {
    background: #5fe676;
  }

  &.checked>span {
    left: calc(100% - #{$h2} - 2px);
  }

  //active：鼠标按下没松开的时候变宽；focus：鼠标按下松开之后变宽并一直保持
  &:active>span {
    width: $h2 + $w;
  }

  &.checked:active>span {
    width: $h2 + $w;
    margin-left: -$w;
  }

}
</style>
