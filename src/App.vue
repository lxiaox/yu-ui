<template>
<router-view />
</template>

<script lang="ts">
import {
  provide,
  ref
} from 'vue';
import router from './router';
export default {
  name: "App",
  setup() {
    const asideVisible = ref(false)
    provide('asideVisible', asideVisible)
    router.afterEach(() => {
      asideVisible.value = false
    })
  }
};
</script>
