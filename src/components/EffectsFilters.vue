<template>
  <div class="effects-filters">
    <v-container>
      <h1 class="mb-8 text-4xl font-bold">12. Effects & Filters</h1>
      
      <section class="mb-12">
        <h2 class="mb-4 text-3xl font-semibold">1. 그림자 효과</h2>
        <p class="mb-4 text-xl">
          Tailwind CSS에서 제공하는 다양한 그림자 효과에 대해 설명합니다.
        </p>
        <pre><code>&lt;div class="shadow-md shadow-cyan-500"&gt;
  그림자 효과가 있는 요소
&lt;/div&gt;</code></pre>

<div class="w-1/3 shadow-md p-7 shadow-cyan-500">
  그림자 효과가 있는 요소
</div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 text-3xl font-semibold">2. 불투명도</h2>
        <p class="mb-4 text-xl">
          요소의 그림자 불투명도를 조절하는 클래스들을 소개합니다.
        </p>
        <pre class="mb-4"><code>&lt;div class="shadow-lg shadow-indigo-500/50"&gt;
  불투명도가 있는 요소
&lt;/div&gt;</code></pre>
<pre><code>&lt;div class="max-w-sm overflow-hidden rounded shadow-lg"&gt;
  &lt;div class="px-6 py-4"&gt;
    &lt;div class="mb-2 text-xl font-bold"&gt;카드 제목&lt;/div&gt;
    &lt;p class="text-base text-gray-700"&gt;
      이것은 카드 UI의 본문 텍스트입니다. 
    &lt;/p&gt;
    &lt;button class="px-3 py-2 text-white rounded shadow-md opacity-75 bg-cyan-500 shadow-cyan-500/50 hover:bg-blue-700"&gt;
      버튼
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<div class="w-1/3 shadow-lg shadow-indigo-500/50 p-7">
  불투명도가 있는 요소
</div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 text-3xl font-semibold">3. 필터</h2>
        <p class="mb-4 text-xl">
          이미지나 요소에 적용할 수 있는 다양한 필터 효과를 설명합니다.
        </p>
        <pre><code>&lt;div class="flex flex-wrap gap-4"&gt;
  &lt;img src="/path/to/image.jpg" alt="원본 이미지" class="object-cover w-64 h-64"&gt;
  &lt;img src="/path/to/image.jpg" alt="흑백 필터" class="object-cover w-64 h-64 grayscale"&gt;
  &lt;img src="/path/to/image.jpg" alt="세피아 필터" class="object-cover w-64 h-64 sepia"&gt;
  &lt;img src="/path/to/image.jpg" alt="블러 필터" class="object-cover w-64 h-64 blur-sm"&gt;
  &lt;img src="/path/to/image.jpg" alt="밝기 조절" class="object-cover w-64 h-64 brightness-150"&gt;
  &lt;img src="/path/to/image.jpg" alt="대비 조절" class="object-cover w-64 h-64 contrast-150"&gt;
&lt;/div&gt;</code></pre>

        <div class="btn-group">  
          <v-btn to="/docs/borders" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/animations" variant="flat" color="primary">Next</v-btn>
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
