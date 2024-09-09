<template>
  <div class="responsive">
    <v-container>
      <h1>10. Responsive</h1>
      
      <section>
        <h2>1. 반응형 디자인 소개</h2>
        <p>
          반응형 디자인(Responsive Design)은 다양한 화면 크기와 장치에서 일관된 사용자 경험을 제공하기 위해 웹 페이지의 레이아웃과 콘텐츠를 동적으로 조정하는 접근 방식입니다. 반응형 디자인의 주요 목표는 데스크탑, 태블릿, 스마트폰 등 다양한 장치에서 웹 페이지가 최적의 형태로 표시되도록 하는 것입니다.
        </p>

        <ul class="list-disc list-inside">
          <li>유동적인 그리드 레이아웃 (Fluid Grid Layouts) : 화면 크기에 따라 그리드의 너비가 자동으로 조정됩니다.</li>
          <li>유연한 이미지 및 미디어 (Flexible Images and Media) : 이미지와 미디어 요소의 크기를 상대적인 단위로 설정하여 화면 크기에 맞게 자동으로 조정되도록 합니다.</li>
          <li>미디어 쿼리 (Media Queries) : CSS의 미디어 쿼리를 사용하여 특정 화면 크기나 장치 특성에 따라 스타일을 적용합니다. 이를 통해 다양한 화면 크기에서 최적의 레이아웃을 제공할 수 있습니다.</li>
          <li>모바일 우선 접근 방식 (Mobile-First Approach) : 디자인과 개발을 모바일 장치부터 시작하여 점진적으로 더 큰 화면 크기에 맞게 확장하는 접근 방식입니다. 이 방법은 성능 최적화와 사용자 경험 향상에 도움이 됩니다.</li>  
        </ul>

        <h2>2. 반응형 디자인의 장점</h2>
        <ul class="list-disc list-inside">
          <li>향상된 사용자 경험: 다양한 장치에서 일관된 사용자 경험을 제공하여 사용자의 만족도를 높입니다.</li>
          <li>유지보수 용이성: 하나의 코드베이스로 다양한 장치를 지원할 수 있어 유지보수가 용이합니다.</li>
          <li>SEO 향상: 검색 엔진은 반응형 웹사이트를 선호하며, 이는 SEO 성능 향상에 기여할 수 있습니다.</li>
          <li>미래 대비: 새로운 장치와 화면 크기가 등장하더라도 유연하게 대응할 수 있습니다.</li>
        </ul>
      </section>

      <section>
        <h2>3. 반응형 레이아웃 예제</h2>
        <p>
          실제 반응형 레이아웃 예제를 보여줍니다.
        </p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="ko"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;반응형 예제&lt;/title&gt;
  &lt;link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body class="bg-gray-100"&gt;
  &lt;div class="container p-4 mx-auto"&gt;
    &lt;h1 class="mb-4 text-3xl font-bold"&gt;반응형 예제&lt;/h1&gt;
    
    &lt;div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"&gt;
      &lt;div class="p-6 bg-white rounded-lg shadow-md"&gt;
        &lt;h2 class="mb-2 text-xl font-bold"&gt;카드 1&lt;/h2&gt;
        &lt;p&gt;이것은 반응형 카드입니다.&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="p-6 bg-white rounded-lg shadow-md"&gt;
        &lt;h2 class="mb-2 text-xl font-bold"&gt;카드 2&lt;/h2&gt;
        &lt;p&gt;이것은 반응형 카드입니다.&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="p-6 bg-white rounded-lg shadow-md"&gt;
        &lt;h2 class="mb-2 text-xl font-bold"&gt;카드 3&lt;/h2&gt;
        &lt;p&gt;이것은 반응형 카드입니다.&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="p-6 bg-white rounded-lg shadow-md"&gt;
        &lt;h2 class="mb-2 text-xl font-bold"&gt;카드 4&lt;/h2&gt;
        &lt;p&gt;이것은 반응형 카드입니다.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

        <div class="btn-group"> 
          <v-btn to="/docs/layouts" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/borders" variant="flat" color="primary">Next</v-btn>
        </div>
      </section>
    </v-container>
  </div>
</template>

<script setup>
// 필요한 경우 여기에 스크립트 로직을 추가하세요
</script>

<style scoped lang="scss">
.v-container{
  ul{
    margin-bottom: 70px;
  }
}
</style>
