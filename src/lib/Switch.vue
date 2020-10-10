<template>
<span class="yu-switch" :class="classes" @click="toggle" :style="{'background':value?activeColor:inactiveColor}">
  <span class="yu-switch-inner"></span>
</span>
</template>

<script lang="ts">
import {
  computed,
  ref
} from 'vue'

export default {
  props: {
    value: Boolean,
    activeColor: String,
    inactiveColor: String,
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, context) {
    const toggle = () => {
      if (props.disabled) return
      context.emit('update:value', !props.value)
    }
    const classes = computed(() => {
      return {
        ['yu-switch-active']: props.value,
        ['yu-switch-is-disabled']: props.disabled
      }
    })
    return {
      toggle,
      classes
    }
  }
}
</script>

<style lang="scss">
$h1: 22px;
$h2: $h1 - 4px;
$w: 6px;
$blue:#409eff;
$green:#5fe676;
$grey: #ddd;

.yu-switch {
  display: inline-block;
  width: $h1*2;
  height: $h1;
  background: $grey;
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

  &.yu-switch-active {
    background: $blue;
  }

  &.yu-switch-active>.yu-switch-inner {
    left: calc(100% - #{$h2} - 2px);
  }

  //active：鼠标按下没松开的时候变宽；focus：鼠标按下松开之后变宽并一直保持
  &:active>.yu-switch-inner {
    width: $h2 + $w;
  }

  &.yu-switch-active:active>.yu-switch-inner {
    width: $h2 + $w;
    margin-left: -$w;
  }

  &.yu-switch-is-disabled {
    opacity: .6;
    cursor: not-allowed;

    .yu-switch-inner {
      width: $h2;
    }

    &.yu-switch-active .yu-switch-inner {
      width: $h2;
      margin-left: 0;
    }
  }

}
</style>
