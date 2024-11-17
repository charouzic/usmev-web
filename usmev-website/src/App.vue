<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">

    <!-- Dynamic route content -->
    <RouterView />
  </div>
</template>

<style scoped>
#app {
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 2rem; */
  font-weight: normal;
}
</style>
