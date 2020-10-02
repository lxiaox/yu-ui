<template>
<button class="yu-btn">
  <slot />
</button>
</template>

<script lang="ts">
export default {}
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
}
</style>
