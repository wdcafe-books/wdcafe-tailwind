<template>
  <div class="borders">
    <v-container>
      <h1>11. Borders</h1>
      
      <section>
        <h2>1. 테두리 스타일</h2>
        <p>
          Tailwind CSS에서 제공하는 다양한 테두리 스타일에 대해 설명합니다.
        </p>
        <pre><code> &lt;div class="w-1/3 border p-7"&gt;
  테두리가 있는 요소
&lt;/div&gt;</code></pre>

<div class="w-1/3 border p-7">
  테두리가 있는 요소
</div>
      </section>

      <section>
        <h2>2. 테두리 종류</h2>
        <p>
          테두리의 종류를 지정하는 클래스들을 소개합니다.
        </p>
        <pre><code>&lt;div class="w-1/3 border-2 border-blue-500 border-dotted p-7"&gt;
  테두리 종류가 있는 요소
&lt;/div&gt;</code></pre>

<div class="w-1/3 border-2 border-blue-500 border-dotted p-7">
  테두리 종류가 있는 요소
</div>
      </section>

      <section>
        <h2>3. 테두리 두께</h2>
        <p>
          테두리의 두께를 조절하는 클래스들을 소개합니다.
        </p>
        <pre><code>&lt;div class="w-1/3 border-8 border-blue-300 border-solid p-7"&gt;
  테두리 두께와 색상이 있는 요소
&lt;/div&gt;</code></pre>

<div class="w-1/3 border-8 border-blue-300 border-solid p-7">
  테두리 두께와 색상이 있는 요소
</div>
      </section> 

      <section>
        <h2>4. 테두리 방향</h2>
        <p>
          테두리의 방향을 지정하는 방법에 대해 설명합니다.
        </p>
        <pre><code>&lt;div class="border-b border-gray-400 border-5"&gt;
  테두리 방향이 있는 요소
&lt;/div&gt;</code></pre>

<div class="w-1/3 border-l-8 border-gray-300 p-7">
  테두리 방향이 있는 요소
</div>
      </section>

      <section>
        <h2>5. 구분선 테두리</h2>
        <p>
          구분선 테두리를 사용하는 방법에 대해 설명합니다.
        </p>
        <pre><code>&lt;div class="grid grid-cols-3 text-center border border-gray-300 divide-x divide-gray-700 p-7"&gt;
  &lt;div&gt;01&lt;/div&gt;
  &lt;div&gt;02&lt;/div&gt;
  &lt;div&gt;03&lt;/div&gt;
&lt;/div&gt;</code></pre>

<div class="grid grid-cols-3 text-center border border-gray-300 divide-x divide-gray-700 p-7">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

        <div class="btn-group">  
          <v-btn to="/docs/responsive" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/effects-filters" variant="flat" color="primary">Next</v-btn>
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
