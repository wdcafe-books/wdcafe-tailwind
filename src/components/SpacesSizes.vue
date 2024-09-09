<template>
  <div class="space-size">
    <v-container>
      <h1>5. Spaces & Sizes</h1>
      
      <section>
        <h2>1. 여백 (Margin)</h2>
        <p>
          Tailwind CSS에서는 여백을 쉽게 조절할 수 있는 클래스를 제공합니다.
        </p>
        <pre><code>&lt;div class="m-10"&gt;여백 10&lt;/div&gt;
&lt;div class="mt-10"&gt;여백 위쪽 10&lt;/div&gt;
&lt;div class="mr-10"&gt;여백 오른쪽 10&lt;/div&gt;
&lt;div class="mb-10"&gt;여백 아래쪽 10&lt;/div&gt;
&lt;div class="ml-10"&gt;여백 왼쪽 10&lt;/div&gt;
&lt;div class="mx-10"&gt;여백 좌우 10&lt;/div&gt;
&lt;div class="my-10"&gt;여백 상하 10&lt;/div&gt;</code></pre>

<div class="example">
  <div class="m-10">여백 10</div>
  <div class="mt-10">여백 위쪽 10</div>
  <div class="mr-10 ">여백 오른쪽 10</div>
  <div class="mb-10">여백 아래쪽 10</div>
  <div class="ml-10">여백 왼쪽 10</div>
  <div class="mx-10">여백 좌우 10</div>  
  <div class="my-10">여백 상하 10</div>
</div>
      </section>

      <section>
        <h2>2. 패딩 (Padding)</h2>
        <p>
          요소 내부의 공간을 조절하는 패딩 클래스도 사용할 수 있습니다.
        </p>
        <pre><code>&lt;div class="p-10"&gt;패딩 10&lt;/div&gt;
&lt;div class="pt-10"&gt;패딩 위쪽 10&lt;/div&gt;
&lt;div class="pr-10"&gt;패딩 오른쪽 10&lt;/div&gt;
&lt;div class="pb-10"&gt;패딩 아래쪽 10&lt;/div&gt;
&lt;div class="pl-10"&gt;패딩 왼쪽 10&lt;/div&gt;
&lt;div class="px-10"&gt;패딩 좌우 10&lt;/div&gt;
&lt;div class="py-10"&gt;패딩 상하 10&lt;/div&gt;</code></pre>

<div class="example">
  <div class="p-10">패딩 4</div>
  <div class="pt-10">패딩 위쪽 4</div>
  <div class="pr-10">패딩 오른쪽 4</div>
  <div class="pb-10">패딩 아래쪽 4</div>
  <div class="pl-10">패딩 왼쪽 4</div>
  <div class="px-10">패딩 좌우 4</div> 
  <div class="py-10">패딩 상하 4</div>
</div>
      </section>

      <section>
        <h2>3. 너비와 높이</h2>
        <p>
          요소의 크기를 조절하는 다양한 클래스가 제공됩니다.
        </p>
        <pre><code>&lt;div class="w-40"&gt;너비 40&lt;/div&gt;
&lt;div class="h-40"&gt;높이 40&lt;/div&gt;
&lt;div class="w-full"&gt;너비 100%&lt;/div&gt;
&lt;div class="h-full"&gt;높이 100%&lt;/div&gt;
&lt;div class="w-1/2"&gt;너비 50%&lt;/div&gt;
&lt;div class="h-1/2"&gt;높이 50%&lt;/div&gt;
&lt;div class="w-1/3"&gt;너비 33.33%&lt;/div&gt;
&lt;div class="h-1/3"&gt;높이 33.33%&lt;/div&gt;</code></pre>

<div class="example1">
  <div class="w-40">너비 40</div>
  <div class="h-40">높이 40</div>
  <div class="w-full">너비 100%</div>
  <div class="h-full">높이 100%</div>
  <div class="w-1/2">너비 50%</div>
  <div class="h-1/2">높이 50%</div>
  <div class="w-1/3">너비 33.33%</div>
  <div class="h-1/3">높이 33.33%</div>
</div>

        <div class="btn-group">
          <v-btn to="/docs/typography" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/list-property" variant="flat" color="primary">Next</v-btn>
        </div>
      </section>
    </v-container>
  </div>
</template>

<script setup>
// 필요한 경우 여기에 스크립트 로직을 추가하세요
</script>

<style scoped lang="scss">
  .example {
    div {
      width: 30%; 
      border: 1px solid #000;
      padding: 10px;
      margin: 10px;
    }
  }

  .example1 {
    div {
      border: 1px solid #000;
      padding: 10px;
      margin: 10px;
    }
  }
</style>
