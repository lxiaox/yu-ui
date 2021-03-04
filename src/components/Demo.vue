<template>
  <div class="demo">
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-options">
      <Button v-show="!codeVisible" @click="codeVisible = true"
        >显示代码</Button
      >
      <Button v-show="codeVisible" @click="codeVisible = false"
        >隐藏代码</Button
      >
    </div>
    <div class="demo-code" v-show="codeVisible">
      <pre
        class="language-html"
        v-html="Prism.highlight(code, Prism.languages.html, 'html')"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { ref } from 'vue'
import Button from '../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
export default {
  props: {
    title: String,
    component: Object,
  },
  components: {
    Button,
  },
  setup(props) {
    const codeVisible = ref(false)
    const title = ref('')
    const code = ref(null)
    title.value = props.component.__sourceCodeTitle
    code.value = props.component.__sourceCode
    return { codeVisible, title, code, Prism }
  },
}
</script>
<style lang="scss">
$border-color: #a89e9e;
.demo {
  border: 1px solid $border-color;
  border-radius: 3px;
  h2 {
    margin: 20px;
  }
  &-component {
    border-top: 1px dashed $border-color;
    padding: 20px;
  }
  &-options {
    border-top: 1px dashed $border-color;
    padding: 20px;
  }
  &-code {
    border-top: 1px dashed $border-color;
    padding: 20px;
  }
}
</style>