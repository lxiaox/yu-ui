<template>
  <component v-for="c in defaults" :is="c" />
</template>

<script lang="ts">
import Tab from './tab.vue'
export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw Error('Tabs的子标签必须是Tab')
      }
    })

    return { defaults }
  },
}
</script>

<style lang="scss">
</style>
