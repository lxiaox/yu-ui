<template>
  <div class="yu-tabs">
    <div class="yu-tabs-nav" ref="navContainer">
      <div
        class="yu-tabs-nav-item"
        :class="{
          selected: c.props.title === selected,
          disabled: c.props.disabled || c.props.disabled === '',
        }"
        v-for="(c, index) in defaults"
        :key="index"
        @click="select(c)"
        :ref="
          (el) => {
            if (c.props.title === selected) selectedItem = el
          }
        "
      >
        {{ c.props.title }}
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
      <!-- <component :is="current" :key="current.props.title" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const navContainer = ref<HTMLDivElement>(null)

    onMounted(() => {
      watchEffect(() => {
        // 获取标题宽度
        const { width } = selectedItem.value.getBoundingClientRect()
        //赋值
        indicator.value.style.width = width + 'px'
        //下划线left宽度
        const { left: left1 } = navContainer.value.getBoundingClientRect()
        const { left: left2 } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.left = left2 - left1 + 'px'
      })
    })
    const defaults = context.slots.default()
    console.log(defaults)
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw Error('Tabs的子标签必须是Tab')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const select = (c: any) => {
      if (c.props.disabled || c.props.disabled === '') return
      context.emit('update:selected', c.props.title)
    }
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected)
    })
    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      navContainer,
      current,
    }
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
      &.disabled {
        cursor: default;
        color: #ccc;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
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
