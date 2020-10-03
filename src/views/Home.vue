<template>
<div>
  <Topnav />
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
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #2e2e2e22;

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
      border: 1px solid transparent;

      &:hover {
        border-color: #11bbaacc;
      }
    }
  }
}
</style>
