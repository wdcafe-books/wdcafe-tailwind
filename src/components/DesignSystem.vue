<template>
  <div class="design-system">
    <v-container>
      <h1>14. Design System</h1>

      <section>
        <h2>1. @ 문법 소개</h2>
        <p>
          Tailwind CSS의 @ 문법에 대해 소개합니다. Tailwind CSS에서는 스타일을 작성할 때 CSS의 @ 문법을 활용하여 다양한 기능을 손쉽게 사용할 수 있습니다. 가장 많이 사용되는 @ 문법에는 @tailwind, @apply, @layer, @variants, @responsive 등이 있습니다. 각각의 문법과 사용 예시는 아래와 같습니다.
        </p>
      </section>
      
      <section>
        <h2>2. @layer base</h2>
        <p>
          Tailwind CSS의 기본적인 스타일 리셋과 기본 스타일을 추가할 때 사용됩니다.
        </p>
        <pre><code>&lt;style&gt;
@layer base {
  h1{
    @apply text-4xl font-bold;
  }
  h2{
    @apply text-3xl font-semibold;
  }
  h3{
    @apply text-2xl font-medium;
  } 
}
&lt;/style&gt;</code></pre>
      </section>

      <section>
        <h2>2. @layer components</h2>
        <p>
          Tailwind CSS의 버튼, 폼, 카드 등 재사용 가능한 UI 컴포넌트 스타일을 추가할 때 사용됩니다.
        </p>
        <pre><code>@layer components {
  .btn{
    @apply bg-blue-500 text-white px-4 py-2 rounded-md;
  }
  .card {
    @apply bg-white shadow-md rounded-lg p-6;
  }
}</code></pre>
      </section>

      <section>
        <h2>3. @layer utilities</h2>
        <p>
          Tailwind CSS의 margin, padding, 색상, 글꼴 크기 등 다양한 유틸리티 클래스들을 추가할 때 사용됩니다.
        </p>
        <pre><code>@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .bg-gradient {
    background: linear-gradient(to right, #4facfe, #00f2fe);
  }

  .border-rounded {
    border-radius: 12px;
  }
}</code></pre>
      </section>

      <section>
        <h2>5. @apply</h2>
        <p>
          Tailwind의 유틸리티 클래스들을 기존의 CSS 규칙에 적용할 수 있습니다. 이 문법은 커스터마이징할 때 유용하며, 여러 Tailwind 클래스를 하나의 사용자 정의 클래스에 결합할 수 있습니다.
        </p>
        <pre><code>.btn{
  @apply bg-blue-500 text-white px-4 py-2 rounded-md;
}
.card {
  @apply bg-white shadow-md rounded-lg p-6;
}</code></pre>

        <div class="btn-group">  
          <v-btn to="/docs/design-system" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/core-concepts" variant="flat" color="primary">Next</v-btn>
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
