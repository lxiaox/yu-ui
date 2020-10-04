<template>
<button class="yu-btn" :class="classes" :disabled="disabled">
  <span class="yu-btn-loading" v-if="loading"></span>
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
    },
    loading: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {
      theme,
      size,
      round,
    } = props
    const classes = computed(() => {
      return {
        [`yu-btn-theme-${theme}`]: theme,
        [`yu-btn-size-${size}`]: size,
        [`yu-btn-round`]: round,
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
$size: 14px;
$size1: 16px;
$size2: 12px;

.yu-btn {
  padding: 10px 20px;
  border-radius: 4px;
  background: #fff;
  outline: none;
  border: 1px solid #d9d9d9;
  color: #555;
  font-weight: 400;
  font-size: $size;
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
    padding: 12px 24px;
    font-size: $size1;
  }

  &.yu-btn-size-small {
    padding: 9px 15px;
    font-size: $size2;
  }

  &.yu-btn-size-mini {
    padding: 7px 15px;
    font-size: $size2;
  }

  .yu-btn-loading {
    display: inline-block;
    vertical-align: top;
    width: $size;
    height: $size;
    border: 1px solid;
    border-color: $blue $blue $blue transparent;
    border-radius: $size;
    animation: yu-btn-loading-circle 1s infinite linear;
    margin-right: 4px;
  }

  &.yu-btn-size-small,
  &.yu-btn-size-mini {
    .yu-btn-loading {
      width: $size2;
      height: $size2;
      border-radius: $size2;
    }
  }

  &.yu-btn-theme-success,
  &.yu-btn-theme-warning,
  &.yu-btn-theme-error,
  &.yu-btn-theme-primary {
    .yu-btn-loading {
      border-color: #fff #fff #fff transparent;
    }
  }

  @keyframes yu-btn-loading-circle {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);

    }
  }

  &.yu-btn-round {
    border-radius: $size1*2;
  }

}
</style>
