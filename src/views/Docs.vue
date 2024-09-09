<template>
  <div class="docs">
    <router-view />
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
</script>

<style scoped lang="scss">

</style>