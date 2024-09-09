<template>
  <div class="grids">
    <v-container>
      <h1>8.Grids</h1>
      
      <section>
        <h2>1. 그리드 컨테이너</h2>
        <p>
          Tailwind CSS에서 그리드 컨테이너를 만드는 방법에 대해 설명합니다.
        </p>

        <pre><code>&lt;!-- Grid 기본 설정 --&gt;
&lt;h2&gt;01&lt;/h2&gt;
&lt;div class="grid grid-cols-3 gap-2 border-4 border-red-400"&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 반응형 --&gt;
&lt;h2&gt;02&lt;/h2&gt; 
&lt;div class="grid grid-cols-1 gap-2 border-4 border-red-400 sm:grid-cols-3 md:grid-cols-4"&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 행방향 배치(기본값) --&gt;
&lt;h2&gt;03&lt;/h2&gt;
&lt;div class="grid grid-cols-3 grid-rows-3 gap-2 border-4 border-red-400"&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 열방향 배치(grid-flow-col) --&gt;
&lt;h2&gt;04&lt;/h2&gt;
&lt;div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-2 border-4 border-red-400"&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello1&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello4&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 열과 행 확장 (col-span-2, row-span-2) --&gt;
&lt;h2&gt;05&lt;/h2&gt;
&lt;div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400"&gt;
  &lt;div class="col-span-2 row-span-2 border-4 border-blue-500"&gt;Hello1&lt;/div&gt;
  &lt;div class="col-span-2 border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello4&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 열과 행 확장 (col-start-1, col-end-3, row-start-1, row-end-3) --&gt;
&lt;h2&gt;06&lt;/h2&gt;
&lt;div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400"&gt;
  &lt;div class="col-start-1 col-end-3 row-start-1 row-end-3 border-4 border-blue-500"&gt;Hello1&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello4&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 열과 행 확장 (col-start-1 row-start-2) --&gt; 
&lt;h2&gt;07&lt;/h2&gt;
&lt;div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400"&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello1&lt;/div&gt;
  &lt;div class="col-start-1 row-start-2 border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello4&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 열과 행 확장 반응형(1) --&gt;
&lt;h2&gt;09&lt;/h2&gt;
&lt;div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400"&gt;
  &lt;div class="border-4 border-blue-500 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3"&gt;Hello1&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello4&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;
 
&lt;!-- Grid 열과 행 확장 반응형(2) --&gt;
&lt;h2&gt;9&lt;/h2&gt;
&lt;div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400"&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello1&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="border-4 border-blue-500 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3"&gt;Hello4&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 아이템 정렬(items-center) --&gt;
&lt;h2&gt;10&lt;/h2&gt;
&lt;div class="grid items-center grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400"&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello1&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="border-4 border-blue-500 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3"&gt;Hello4&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 아이템 정렬(stretch) --&gt;  
&lt;h2&gt;11&lt;/h2&gt;
&lt;div class="grid items-stretch grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400"&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello1&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello4&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 아이템 정렬(justify-items-start) --&gt;
&lt;h2&gt;12&lt;/h2&gt;
&lt;div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400 justify-items-start"&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello1&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello4&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 아이템 정렬(content-center) --&gt;
&lt;h2&gt;13&lt;/h2&gt;
&lt;div class="grid content-center grid-cols-4 gap-2 border-4 border-red-400 h-80"&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello1&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello4&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 아이템 정렬(content-around) --&gt;
&lt;h2&gt;14&lt;/h2&gt;
&lt;div class="grid content-around grid-cols-4 gap-2 border-4 border-red-400 h-80"&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello1&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello4&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="h-20 border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Grid 아이템 순서바꾸기(order-first) --&gt;
&lt;h2&gt;15&lt;/h2&gt;
&lt;div class="grid grid-cols-4 gap-2 border-4 border-red-400"&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello1&lt;/div&gt;
  &lt;div class="order-first border-4 border-blue-500"&gt;Hello2&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello3&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello4&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello5&lt;/div&gt;
  &lt;div class="border-4 border-blue-500"&gt;Hello6&lt;/div&gt;
&lt;/div&gt;</code></pre>

        <div class="btn-group"> 
          <v-btn to="/docs/flex" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/layouts" variant="flat" color="primary">Next</v-btn>
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