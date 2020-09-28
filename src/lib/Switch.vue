<template>
<div>
  <button><span></span></button>
</div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
$h1: 22px;
$h2: $h1 - 4px;

button {
  width: $h1*2;
  height: $h1;
  background: gray;
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
    background: #111;
    position: absolute;
    top: 2px;
    left: 2px;
  }

  &.checked>span {
    left: calc(100% - #{$h2} - 2px)
  }

}
</style>
