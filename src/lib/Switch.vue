<template>
<div>
  <span class="yu-switch" :class="{'yu-active':value}" @click="toggle"><span class="yu-switch-inner"></span></span>
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
      context.emit('update:value', !props.value)
    }
    return {
      toggle
    }
  }
}
</script>

<style lang="scss" scoped>
$h1: 22px;
$h2: $h1 - 4px;
$w: 6px;

.yu-switch {
  display: inline-block;
  width: $h1*2;
  height: $h1;
  background: #ddd;
  border-radius: $h1/2;
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all .3s;

  >.yu-switch-inner {
    width: $h2;
    height: $h2;
    border-radius: $h2/2;
    background: #fff;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all .3s;
  }

  &.yu-active {
    background: #5fe676;
  }

  &.yu-active>.yu-switch-inner {
    left: calc(100% - #{$h2} - 2px);
  }

  //active：鼠标按下没松开的时候变宽；focus：鼠标按下松开之后变宽并一直保持
  &:active>.yu-switch-inner {
    width: $h2 + $w;
  }

  &.yu-active:active>.yu-switch-inner {
    width: $h2 + $w;
    margin-left: -$w;
  }

}
</style>
