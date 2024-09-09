<template>
  <div class="lists">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-4xl font-bold">Tailwind Docs</h1>
        </v-col>
      </v-row>
      <v-row class="mb-10">
        <v-col v-for="(item, index) in docs" :key="index" cols="12" md="4" class="flex">
          <v-card variant="outlined" class="p-8 w-100 d-flex flex-column">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.description }}</v-card-text>
            <v-card-actions>
              <v-btn :to="item.link" variant="flat" color="primary">바로가기</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script setup>
const props = defineProps({
  docs: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
  .v-card-title{
    font-size: 2.4rem; 
    font-weight: 600;
  }
  .v-card-text{
    font-size: 1.6rem;
    font-weight: 400;
  }
  .v-btn{
    font-size: 1.4rem;
    font-weight: 400;
  }
</style>