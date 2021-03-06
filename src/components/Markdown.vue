<template>
  <article class="markdown-body" v-html="content"></article>
</template>
<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss">
.markdown-body {
  p > a {
    color: #11a999;
  }
}
</style>