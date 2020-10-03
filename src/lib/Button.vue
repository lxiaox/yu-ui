<template>
<button class="yu-btn" :class="classes" :disabled="disabled">
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
    size: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const {
      theme,
      size
    } = props
    const classes = computed(() => {
      return {
        [`yu-btn-theme-${theme}`]: theme,
        [`yu-btn-size-${size}`]: size,
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
$blue2:#2d8cf0;
$green: #67c23a;
$yellow: #e6a23c;
$red: #f56c6c;
$grey: grey;

.yu-btn {
  padding: 10px 20px;
  border-radius: 4px;
  background: #fff;
  outline: none;
  border: 1px solid #d9d9d9;
  color: #555;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    color: $blue;
    border-color: $blue;
  }

  &[disabled] {
    cursor: not-allowed;
    color: $grey;
    border-color: $grey;
  }

  &.yu-btn-theme-primary {
    background-color: $blue2;
    border-color: $blue2;
    color: #fff;

    &:hover,
    &:focus {
      background-color: lighten($blue2, 10%);
      border-color: lighten($blue2, 10%);
      color: #fff;
    }

    &[disabled] {
      color: #fff;
      background: lighten($blue2, 15%);
      border-color: lighten($blue2, 15%);
    }
  }

  &.yu-btn-theme-text {
    border-color: transparent;
  }

  &.yu-btn-theme-link {
    border-color: transparent;
    color: $blue;

    &[disabled] {
      color: lighten($blue, 15%)
    }
  }

  &.yu-btn-theme-success {
    background: $green;
    border-color: $green;
    color: #fff;

    &:hover,
    &:focus {
      background: lighten($green, 10%);
      border-color: lighten($green, 10%);
    }

    &[disabled] {
      color: #fff;
      background: lighten($green, 15%);
      border-color: lighten($green, 15%);
    }
  }

  &.yu-btn-theme-warning {
    background: $yellow;
    border-color: $yellow;
    color: #fff;

    &:hover,
    &:focus {
      background: lighten($yellow, 10%);
      border-color: lighten($yellow, 10%);
    }

    &[disabled] {
      color: #fff;
      background: lighten($yellow, 15%);
      border-color: lighten($yellow, 15%);
    }
  }

  &.yu-btn-theme-error {
    background: $red;
    border-color: $red;
    color: #fff;

    &:hover,
    &:focus {
      background: lighten($red, 10%);
      border-color: lighten($red, 10%);
    }

    &[disabled] {
      color: #fff;
      background: lighten($red, 15%);
      border-color: lighten($red, 15%);
    }
  }

  &.yu-btn-size-big {
    padding: 12px 20px;
  }

  &.yu-btn-size-small {
    padding: 9px 16px;
    font-size: 12px;
  }

  &.yu-btn-size-mini {
    padding: 7px 16px;
    font-size: 12px;
  }

  &.yu-btn-theme-text[disabled],
  &.yu-btn-theme-link[disabled] {
    border-color: transparent;
  }
}
</style>
