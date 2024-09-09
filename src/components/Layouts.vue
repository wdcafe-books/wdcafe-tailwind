<template>
  <div class="layouts">
    <v-container>
      <h1>9. Layouts</h1>
      
      <section class="mb-12">
        <h2>1. 컨테이너</h2>
        <p class="mb-15">
          Tailwind CSS의 컨테이너 클래스를 사용하여 콘텐츠를 중앙에 배치할 수 있습니다. 단, 자동을 중앙정렬을 하려면 tailwind.config.js 파일에 아래 코드를 참고로 추가 설정을 해주세요!
        </p>

        <h3 class="mb-5 text-3xl font-bold">Tailwind CSS는 다음과 같은 기본 브레이크포인트를 제공합니다:</h3>
          
        <ul class="mb-10 list-disc list-inside">
          <li>sm: 640px 이상</li>
          <li>md: 768px 이상</li>
          <li>lg: 1024px 이상</li>
          <li>xl: 1280px 이상</li>
          <li>2xl: 1536px 이상</li>
        </ul>
          
        <p>
          이러한 브레이크포인트를 사용하여 반응형 디자인을 쉽게 구현할 수 있습니다. 예를 들어, 'md:text-lg'는 768px 이상의 화면에서 텍스트 크기를 large로 설정합니다.
        </p>
        <pre><code>[ HTML ]
&lt;div class="container"&gt;
  &lt;h1 class="p-4 bg-blue-500"&gt;왼쪽 컨텐츠&lt;/h1&gt;
&lt;/div&gt;    

[ tailwind.config.js ]
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  
  theme: {
    // Container Center Settings 
    container: {
      center: true,
    },

    // Custom Breakpoint Settings
    screens: {
      sm: '480px',
      ml: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
};</code></pre>
      </section>

      <section class="mb-12">
        <h2>2. 그리드를 이용한 레이아웃</h2>
        <p>
          그리드 시스템을 사용하여 복잡한 레이아웃을 쉽게 만들 수 있습니다. 
        </p>

        <ul class="mb-10 list-disc list-inside">
          <li>Tailwind CSS에서는 .row 클래스 대신 grid 클래스를 사용하여 그리드 컨테이너를 설정합니다.</li>
          <li>Tailwind CSS에서는 .col 클래스 대신 grid-cols-{n} 클래스를 사용하여 그리드 항목을 설정합니다.</li>
        </ul>
        <pre><code>&lt;div class="container mx-auto"&gt;
  &lt;div class="grid grid-cols-3 gap-4"&gt;
    &lt;div class="col-span-1 bg-blue-500"&gt;1&lt;/div&gt;
    &lt;div class="col-span-1 bg-blue-500"&gt;2&lt;/div&gt;
    &lt;div class="col-span-1 bg-blue-500"&gt;3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;  </code></pre>
      </section>

      <section class="mb-12">
        <h2>3. Flexbox를 이용한 레이아웃</h2>
        <p>
          Flexbox를 사용하여 요소들을 유연하게 배치할 수 있습니다.
        </p>

        <ul class="mb-10 list-disc list-inside">
          <li>Tailwind CSS에서는 .container 클래스 대신 부모요소에 flex 클래스를 사용하여 레이아웃 컨테이너를 설정합니다.</li>
          <li>Tailwind CSS에서는 .row 클래스 대신 부모요소에 flex-row와 flex-col 클래스를 사용하여 레이아웃 주축을 설정합니다.</li>
          <li>Tailwind CSS에서는 .col 클래스 대신 자식요소를 사용하여 레이아웃 항목을 설정합니다.</li>
        </ul>
        <pre><code>&lt;div class="container mx-auto"&gt; 
  &lt;div class="flex flex-row -mx-2"&gt;  <!-- parent container : 부모요소 -->
    &lt;div class="px-2 bg-blue-500"&gt;1&lt;/div&gt;  <!-- items : 자식요소 -->
    &lt;div class="px-2 bg-blue-500"&gt;2&lt;/div&gt;
    &lt;div class="px-2 bg-blue-500"&gt;3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        <div class="btn-group"> 
          <v-btn to="/docs/grids" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/responsive" variant="flat" color="primary">Next</v-btn>
        </div>
      </section>
    </v-container>
  </div>
</template>

<script setup>
// 필요한 경우 여기에 스크립트 로직을 추가하세요
</script>

<style scoped lang="scss">
.v-container {
  h2{
    font-size: 3rem;
  }  

  pre{
    margin-bottom: 80px;
  }
} 
</style>
