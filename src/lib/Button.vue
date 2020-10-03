<template>
<button class="yu-btn" :class="classes">
  <slot />
</button>
</template>

<script lang="ts">
import {
  computed
} from 'vue'
export default {
  props: {
    theme: {
      type: String,
      default: 'default',
    },

  },
  setup(props) {
    const {
      theme
    } = props
    const classes = computed(() => {
      return {
        [`yu-btn-theme-${theme}`]: theme,
      }
    })
    return {
      classes
    }
  }
}
</script>

<style lang="scss">
$blue: #57a1f1;

.yu-btn {
  padding: 0 14px;
  height: 32px;
  border-radius: 4px;
  background: #fff;
  outline: none;
  border: 1px solid #d9d9d9;
  color: #555;
  font-weight: 400;
  line-height: 14px;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    color: $blue;
    border-color: $blue;
  }

  &.yu-btn-theme-default {}
}
</style>
