<template>
  <div class="topnav-wrapper">
    <div class="topnav">
      <span
        v-if="isDoc"
        class="toggle-aside-btn"
        @click="toggleAsideVisible"
      ></span>
      <router-link class="logo" to="/"> </router-link>
      <ul class="menu">
        <li>
          <router-link to="/doc"> 文档 </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  props: {
    isDoc: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<Boolean>>('asideVisible')
    const toggleAsideVisible = () => {
      asideVisible.value = !asideVisible.value
    }
    return {
      toggleAsideVisible,
    }
  },
}
</script>

<style lang="scss">
$h: 30px;

.topnav-wrapper {
  background: #fff;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.topnav {
  background: #11bbaacc;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  color: white;
  position: relative;
  box-shadow: 0 0 10px #11bbaacc;

  > .logo {
    margin-right: auto;
    vertical-align: middle;
    cursor: pointer;
    width: $h;
    height: $h;
    background: url(../assets/fishLogo.png) center center no-repeat;
    background-size: $h;
  }

  > .menu {
    display: flex;
    flex-wrap: nowrap;

    > li {
      margin-right: 16px;
      line-height: $h;

      > a:hover {
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
