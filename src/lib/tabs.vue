<template>
  <div class="yu-tabs">
    <div class="yu-tabs-nav">
      <div
        class="yu-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
        :ref="
          (el) => {
            if (el) navItems[index] = el
          }
        "
      >
        {{ t }}
      </div>
      <div class="yu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="yu-tabs-content">
      <component
        class="yu-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="(c, index) in defaults"
        :is="c"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue'
import Tab from './tab.vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([])
    const indicator = ref<HTMLDivElement>(null)
    onMounted(() => {
      const divs = navItems.value
      const result = divs.filter((div) => {
        return div.classList.contains('selected')
      })[0]
      // 获取标题宽度
      const { width } = result.getBoundingClientRect()
      console.log(width)
      //赋值
      indicator.value.style.width = width + 'px'
    })
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw Error('Tabs的子标签必须是Tab')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return { defaults, titles, select, navItems, indicator }
  },
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.yu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
