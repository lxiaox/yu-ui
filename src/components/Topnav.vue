<template>
<div class="topnav">
  <div class="logo">LOGO</div>
  <ul class="menu">
    <li>首页</li>
    <li>文档</li>
  </ul>
</div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
.topnav {
  background: pink;
  display: flex;
  justify-content: space-between;
  padding: 16px;

  >.logo {
    margin-right: auto;
    vertical-align: middle;
  }

  >.menu {

    display: flex;
    flex-wrap: nowrap;

    >li {
      margin-right: 16px;
    }
  }
}
</style>
