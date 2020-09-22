<template>
<div>
  导航栏 |
  <router-link to="/my">my</router-link> |
  <router-link to="/my2">my2</router-link>
</div>
<hr>
<router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
