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
    <ui class="feature-container">
      <li class="feature">
        <svg class="icon">
          <use xlink:href="#icon-vue3"></use>
        </svg>
        <h3>基于VUE3</h3>
        <p>使用了vue3 Composition API</p>
      </li>
      <li class="feature">
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于TypeScript</h3>
        <p>源代码采用 TypeScript 编写</p>
      </li>
      <li class="feature">
        <svg class="icon">
          <use xlink:href="#icon-read"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ui>
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
  padding: 100px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.feature-container {
  margin: 64px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .feature {
    margin: 16px 0;
    flex-basis: 324px;
    display: grid;
    grid-template-areas: 'icon title' 'icon text';
    grid-template-rows: 1fr auto;
    grid-template-columns: 76px auto;
    padding: 0 16px;
    @media (min-width: 800px) {
      flex-basis: 400px;
    }

    svg {
      width: 60px;
      height: 60px;
      grid-area: icon;
    }
    h3 {
      grid-area: title;
      font-size: 24px;
    }
    p {
      grid-area: text;
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
