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
$green: #67c23a;
$green-hover: #85ce61;
$yellow: #e6a23c;
$yellow-hover: #ebb563;
$red: #f56c6c;
$red-hover: #f78989;

.yu-btn {
  padding: 12px 20px;
  border-radius: 4px;
  background: #fff;
  outline: none;
  border: 1px solid #d9d9d9;
  color: #555;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    color: $blue;
    border-color: $blue;
  }

  &.yu-btn-theme-primary {
    background-color: #2d8cf0;
    border-color: #2d8cf0;
    color: #fff;

    &:hover {
      background-color: #57a3f3;
      border-color: #57a3f3;
      color: #fff;
    }
  }

  &.yu-btn-theme-text {
    border-color: transparent;
  }

  &.yu-btn-theme-link {
    border-color: transparent;
    color: $blue;
  }

  &.yu-btn-theme-success {
    background: $green;
    border-color: $green;
    color: #fff;

    &:hover {
      background: $green-hover;
      border-color: $green-hover;
    }
  }

  &.yu-btn-theme-warning {
    background: $yellow;
    border-color: $yellow;
    color: #fff;

    &:hover {
      background: $yellow-hover;
      border-color: $yellow-hover;
    }
  }

  &.yu-btn-theme-error {
    background: $red;
    border-color: $red;
    color: #fff;

    &:hover {
      background: $red-hover;
      border-color: $red-hover;
    }
  }
}
</style>
