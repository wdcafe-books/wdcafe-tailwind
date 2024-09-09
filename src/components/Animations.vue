<template>
  <div class="animations">
    <v-container>
      <h1 class="mb-8 text-4xl font-bold">13. Animations</h1> 
      
      <section class="mb-12">
        <h2 class="mb-4 text-3xl font-semibold">1. 기본 애니메이션</h2>
        <p class="mb-4 text-xl">
          Tailwind CSS에서 제공하는 기본 애니메이션 클래스에 대해 설명합니다.
        </p>
        <pre><code>&lt;div class="flex items-center justify-center h-64"&gt;
  &lt;button class="p-5 m-3 text-white transition duration-150 ease-in delay-150 bg-blue-500 rounded hover:bg-indigo-500 hover:scale-110 hover:translate-y-1"&gt;Save Change&lt;/button&gt;
  &lt;button class="p-5 m-3 text-white transition duration-300 ease-out delay-150 bg-blue-500 rounded hover:bg-indigo-500 hover:scale-110 hover:translate-y-1"&gt;Save Change&lt;/button&gt;
  &lt;button class="p-5 m-3 text-white transition duration-500 ease-in-out delay-150 bg-blue-500 rounded hover:bg-indigo-500 hover:scale-110 hover:translate-y-1"&gt;Save Change&lt;/button&gt;
&lt;/div&gt;</code></pre>

<div class="flex items-center justify-center">
  <button class="p-5 m-3 text-white transition duration-150 ease-in delay-150 bg-blue-500 rounded hover:bg-indigo-500 hover:scale-110 hover:translate-y-1">Save Change</button>
  <button class="p-5 m-3 text-white transition duration-300 ease-out delay-150 bg-blue-500 rounded hover:bg-indigo-500 hover:scale-110 hover:translate-y-1">Save Change</button>
  <button class="p-5 m-3 text-white transition duration-500 ease-in-out delay-150 bg-blue-500 rounded hover:bg-indigo-500 hover:scale-110 hover:translate-y-1">Save Change</button>
</div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 text-3xl font-semibold">2. Spin 효과</h2>
        <p class="mb-4 text-xl">
          Spin 효과를 적용하는 방법을 소개합니다.
        </p>
        <pre><code>&lt;div class="flex items-center justify-center h-64"&gt;
  &lt;div class="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"&gt;&lt;/div&gt;
  &lt;div class="w-12 h-12 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"&gt;&lt;/div&gt;
  &lt;div class="w-12 h-12 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>

<div class="flex items-center justify-center gap-4">
  <div class="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
  <div class="w-12 h-12 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
  <div class="w-12 h-12 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"></div>
</div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 text-3xl font-semibold">3. 커스텀 애니메이션</h2>
        <p class="mb-4 text-xl">
          Tailwind CSS를 사용하여 커스텀 애니메이션을 만드는 방법을 설명합니다.
        </p>

        <div class="btn-group">  
          <v-btn to="/docs/effects-filters" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/design-system" variant="flat" color="primary">Next</v-btn>
        </div>
      </section>
    </v-container>
  </div>
</template>

<script setup>
// 필요한 경우 여기에 스크립트 로직을 추가하세요
</script>

<style scoped lang="scss">
// 필요한 경우 여기에 스타일을 추가하세요
</style>
