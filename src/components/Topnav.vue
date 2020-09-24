<template>
<div class="topnav">
  <div class="logo">LOGO</div>
  <ul class="menu">
    <li>
      <router-link to="/"> 首页 </router-link>
    </li>
    <li>
      <router-link to="/doc"> 文档 </router-link>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
.topnav {
  background: #11bbaacc;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  color: white;
  z-index: 10;
  position: relative;

  >.logo {
    margin-right: auto;
    vertical-align: middle;
    cursor: pointer;
  }

  >.menu {

    display: flex;
    flex-wrap: nowrap;

    >li {
      margin-right: 16px;

      >a:hover {
        text-decoration: underline white;
      }
    }
  }
}
</style>
