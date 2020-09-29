<template>
<div>
  <Topnav />
  <div class="content">
    <aside :class="{'open':asideVisible}">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import {
  inject,
  Ref
} from 'vue'
export default {
  components: {
    Topnav
  },

  setup() {
    const asideVisible = inject < Ref < Boolean >> ('asideVisible')
    return {
      asideVisible
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  display: block;
  background: white;
  width: 150px;
  height: 100vh;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  transition: all .3s;
  z-index: 9;

  >h2 {
    margin-bottom: 8px;
  }

  >ol {
    >li {
      padding: 8px 0;

      &:hover {
        color: #11a999;
      }
    }
  }
}

main {
  margin-top: 54px;
  padding: 20px;
  overflow: auto;
}

@media (min-width:551px) {
  main {
    padding-left: 170px;
  }

  aside {
    transform: translate(0, 0);
    opacity: 1;
    box-shadow: none;
    background-color: #fff;
  }
}

@media (max-width:550px) {
  aside {
    background: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    opacity: 0;
    transform: translate(-160px, 0);

    &.open {
      opacity: 1;
      transform: translate(0, 0);

    }
  }
}
</style>
