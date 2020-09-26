<template>
<div class="topnav-wrapper">
  <div class="topnav">
    <span class="toggle-aside-btn" @click="toggleAsideVisible"></span>
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
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from 'vue'
export default {
  setup() {
    const asideVisible = inject < Ref < Boolean >> ('asideVisible')
    const toggleAsideVisible = () => {
      asideVisible.value = !asideVisible.value
    }
    return {
      toggleAsideVisible
    }
  }
}
</script>

<style lang="scss">
.topnav-wrapper {
  background: #fff;
  z-index: 10;
  position: relative;

}

.topnav {
  background: #11bbaacc;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  color: white;
  position: relative;
  // z-index: 10;

  >.logo {
    margin-right: auto;
    vertical-align: middle;
    cursor: pointer;
    line-height: 22px;
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

  .toggle-aside-btn {
    background: url(../assets/menu1.png) center center no-repeat;
    background-size: 24px;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 14px;
    display: none;
    cursor: pointer;
  }

  @media (max-width: 550px) {
    .toggle-aside-btn {
      display: inline-block;
    }

    .menu {
      display: none;
    }

    .logo {
      margin: auto;
    }
  }
}
</style>
