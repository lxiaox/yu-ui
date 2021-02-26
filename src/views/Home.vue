<template>
  <div>
    <Topnav :isDoc="false" />
    <div class="content">
      <h1>小鱼UI</h1>
      <h2>基于 VUE3 的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com" target="_blank">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  },
}
</script>

<style lang="scss" scoped>
.content {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #0a8e81cc;

  > .actions {
    padding: 32px 0;

    a {
      margin: 0 16px;
      background: #fff;
      display: inline-block;
      padding: 8px 16px;
      border: 1px solid #11bbaacc;
      transition: all 250ms;

      &:hover {
        border-radius: 6px;
      }
    }
  }
}
</style>
