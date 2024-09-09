<template> 
  <div id="header">
    <v-layout class="rounded rounded-md">      

      <v-app-bar :elevation="2" class="pr-4">
        <v-app-bar-title class="roboto-font font-weight-bold">Tailwind CSS</v-app-bar-title>

        <template v-slot:append>

          <nav class="gnb hidden-sm-and-down flex-grow-1 font-weight-bold">
            <router-link to="/home">HOME</router-link>
            <router-link to="/docs" class="mx-3">DOCS</router-link>
            <a href="https://pagedone.io/docs/tailwind-cheat-sheet">SEARCH</a>
          </nav>
          <v-app-bar-nav-icon class="ml-2" @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>        
      </v-app-bar>   

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'left' : undefined"
        temporary
      >
        <h2 class="pb-3 pt-7">Tailwind</h2>

        <v-divider class="mt-5 mb-5" :thickness="5" color="info"></v-divider>

        <v-list nav class="sidebar-menu-items lnb1">
          <v-list-item v-for="(link, index) in links" :key="index" :to="link.path" class="cursor-pointer">
            <v-icon class="mr-5">{{ link.icon }}</v-icon> <span class="font-weight-bold">{{ link.name }}</span>
          </v-list-item>
          <v-divider class="mt-5 mb-3" :thickness="1" color="info"></v-divider>
          <v-btn href="https://pagedone.io/docs/tailwind-cheat-sheet" variant="text" color="primary text-3xl"><v-icon class="mr-5">mdi-magnify</v-icon> SEARCH</v-btn>
          <v-divider class="mt-3 mb-5" :thickness="1" color="info"></v-divider>
          <v-list-item v-for="(doc, index) in docs" :key="index" :to="doc.link" class="cursor-pointer">
            <v-icon class="mr-5">{{ doc.icon }}</v-icon> <span class="font-weight-bold">{{ doc.title }}</span>
          </v-list-item>
        </v-list> 
      </v-navigation-drawer>         

      <v-footer class="bg-grey-lighten-4 flex-column" :app="true">
        <p class="py-5 font-weight-medium">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </v-footer>
    </v-layout>
  </div>
</template>

<script setup>
  // 여기에 필요한 스크립트 로직을 추가하세요
  import { ref } from 'vue';

  const drawer = ref(false);
  const links = ref([
    { name: 'HOME', path: '/home', icon: 'mdi-home-outline' },
    { name: 'DOCS', path: '/docs', icon: 'mdi-file-document-edit-outline' },
  ]);
  const docs = [
    { title: 'Setup', link: '/docs/setup', icon: 'mdi-file-document-outline' },
    { title: 'Colors', link: '/docs/colors', icon: 'mdi-file-document-outline' },
    { title: 'Customization', link: '/docs/customization', icon: 'mdi-file-document-outline' },
    { title: 'Typography', link: '/docs/typography', icon: 'mdi-file-document-outline' },
    { title: 'Spaces & sizes', link: '/docs/spaces-sizes', icon: 'mdi-file-document-outline' },
    { title: 'List & Property', link: '/docs/list-property', icon: 'mdi-file-document-outline' },
    { title: 'Flex', link: '/docs/flex', icon: 'mdi-file-document-outline' },
    { title: 'Grids', link: '/docs/grids', icon: 'mdi-file-document-outline' },
    { title: 'Layouts', link: '/docs/layouts', icon: 'mdi-file-document-outline' },
    { title: 'Responsive', link: '/docs/responsive', icon: 'mdi-file-document-outline' },
    { title: 'Borders', link: '/docs/borders', icon: 'mdi-file-document-outline' },
    { title: 'Effects & filters', link: '/docs/effects-filters', icon: 'mdi-file-document-outline' },
    { title: 'Animations', link: '/docs/animations', icon: 'mdi-file-document-outline' },
    { title: 'Design System', link: '/docs/design-system', icon: 'mdi-file-document-outline' },
    { title: 'Core concepts', link: '/docs/core-concepts', icon: 'mdi-file-document-outline' },
    { title: 'Dark mode', link: '/docs/dark-mode', icon: 'mdi-file-document-outline' },
];
</script>

<style scoped lang="scss">
// 여기에 필요한 스타일을 추가하세요
  #header{
    .v-toolbar{
      z-index: 10 !important;
    }

    .v-navigation-drawer{
      top: 0 !important;
      height: 100vh !important;
    }

    .v-divider{
      border-color: #333 !important;
    }
  }
</style>
