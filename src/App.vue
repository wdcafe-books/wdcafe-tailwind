<template>
  <div class="app">

    <component :is="layout">
      <router-view></router-view>
    </component>  

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DefaultLayout from './layouts/DefaultLayout.vue'

const route = useRoute()

/*
  라우터 메타 데이터에 따라 레이아웃 컴포넌트를 선택합니다.
  메타 데이터에 레이아웃이 없으면 DefaultLayout을 사용합니다.
*/
const layout = computed(() => {
  return (route.meta && route.meta.layout) ? route.meta.layout : DefaultLayout
})
</script>

<style scoped lang="scss">

</style>
