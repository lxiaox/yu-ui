<template>
  <div class="demo">
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="codeVisible = !codeVisible">
        {{ codeVisible ? '隐藏' : '显示' }}代码
      </Button>
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
import { ref } from 'vue'
import Button from '../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
export default {
  props: {
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
  & + & {
    margin-top: 20px;
  }
  h2 {
    padding: 8px 16px;
    font-size: 20px;
  }
  &-component {
    border-top: 1px dashed $border-color;
    padding: 16px;
  }
  &-actions {
    border-top: 1px dashed $border-color;
    padding: 10px 16px;
  }
  &-code {
    border-top: 1px dashed $border-color;
    padding: 8px 16px;
    pre {
      background: #5bc8bb14;
    }
  }
}
</style>