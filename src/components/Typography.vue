<template>
  <div class="typography">
    <v-container>
      <h1>4. Typography</h1>
      
      <section>
        <h2>1. 폰트 크기</h2>
        <p>
          Tailwind CSS는 다양한 폰트 크기 클래스를 제공합니다.
        </p>
        <pre><code>&lt;div class="text-xs"&gt;텍스트 크기 1&lt;/div&gt;
&lt;div class="text-sm"&gt;텍스트 크기 2&lt;/div&gt;
&lt;div class="text-base"&gt;텍스트 크기 3&lt;/div&gt;
&lt;div class="text-lg"&gt;텍스트 크기 4&lt;/div&gt;
&lt;div class="text-xl"&gt;텍스트 크기 5&lt;/div&gt;
&lt;div class="text-2xl"&gt;텍스트 크기 6&lt;/div&gt;
&lt;div class="text-3xl"&gt;텍스트 크기 7&lt;/div&gt;
&lt;div class="text-4xl"&gt;텍스트 크기 8&lt;/div&gt;
&lt;div class="text-5xl"&gt;텍스트 크기 9&lt;/div&gt;</code></pre>

<div class="example">
  <div class="text-xs">텍스트 크기 1</div>
  <div class="text-sm">텍스트 크기 2</div>
  <div class="text-base">텍스트 크기 3</div>
  <div class="text-lg">텍스트 크기 4</div>
  <div class="text-xl">텍스트 크기 5</div>
  <div class="text-2xl">텍스트 크기 6</div>
  <div class="text-3xl">텍스트 크기 7</div>
  <div class="text-4xl">텍스트 크기 8</div>
  <div class="text-5xl">텍스트 크기 9</div>
</div>
      </section>

      <section>
        <h2>2. 폰트 두께</h2>
        <p>
          폰트 두께를 조절할 수 있는 클래스들이 있습니다.
        </p>
        <pre><code>&lt;div class="font-light"&gt;폰트 두께 1&lt;/div&gt;
&lt;div class="font-normal"&gt;폰트 두께 2&lt;/div&gt;
&lt;div class="font-medium"&gt;폰트 두께 3&lt;/div&gt;
&lt;div class="font-semibold"&gt;폰트 두께 4&lt;/div&gt;
&lt;div class="font-bold"&gt;폰트 두께 5&lt;/div&gt;
&lt;div class="font-extrabold"&gt;폰트 두께 6&lt;/div&gt;
&lt;div class="font-black"&gt;폰트 두께 7&lt;/div&gt;</code></pre>

<div class="example">
  <div class="font-light">폰트 두께 1</div>
  <div class="font-normal">폰트 두께 2</div>
  <div class="font-medium">폰트 두께 3</div>
  <div class="font-semibold">폰트 두께 4</div>
  <div class="font-bold">폰트 두께 5</div>
  <div class="font-extrabold">폰트 두께 6</div>
  <div class="font-black">폰트 두께 7</div>
</div>
      </section>

      <section>
        <h2>3. 폰트 글꼴</h2>
        <p>
          폰트 두께를 조절할 수 있는 클래스들이 있습니다.
        </p>
        <pre><code>&lt;p class="font-sans"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;
&lt;p class="font-serif"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;
&lt;p class="font-mono"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;</code></pre>

<div class="example">
  <p class="font-sans">The quick brown fox jumps over the lazy dog.</p>
  <p class="font-serif">The quick brown fox jumps over the lazy dog.</p>
  <p class="font-mono">The quick brown fox jumps over the lazy dog.</p>
</div>
      </section>

      <section>
        <h2>4. 폰트 색상</h2>
        <p>
          폰트 색상을 조절할 수 있는 클래스들이 있습니다.
        </p>
        <pre><code>&lt;p class="text-red-500"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;
&lt;p class="text-blue-500"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;
&lt;p class="text-green-500"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;</code></pre>

<div class="example">
  <p class="text-red-500">The quick brown fox jumps over the lazy dog.</p> 
  <p class="text-blue-500">The quick brown fox jumps over the lazy dog.</p>
  <p class="text-green-500">The quick brown fox jumps over the lazy dog.</p>
</div>
      </section>

      <section>
        <h2>5. 텍스트 정렬</h2>
        <p>
          텍스트 정렬을 위한 클래스들을 사용할 수 있습니다.
        </p>
        <pre><code>&lt;div class="text-left"&gt;텍스트 정렬 1&lt;/div&gt;
&lt;div class="text-center"&gt;텍스트 정렬 2&lt;/div&gt;
&lt;div class="text-right"&gt;텍스트 정렬 3&lt;/div&gt;</code></pre>

<div class="w-1/3 example">
  <div class="text-left">텍스트 정렬 1</div>
  <div class="text-center">텍스트 정렬 2</div>
  <div class="text-right">텍스트 정렬 3</div>
</div>
      </section>

      <section>
        <h2>6. 텍스트 모양</h2>
        <p>
          텍스트 모양을 조절할 수 있는 클래스들이 있습니다.
        </p>
        <pre><code>&lt;p class="italic"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;
&lt;p class="not-italic"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;
&lt;p class="uppercase"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;
&lt;p class="lowercase"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;
&lt;p class="capitalize"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;
&lt;p class="normal-case"&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;</code></pre>

<div class="example">
  <p class="italic">The quick brown fox jumps over the lazy dog.</p>
  <p class="not-italic">The quick brown fox jumps over the lazy dog.</p>
  <p class="uppercase">The quick brown fox jumps over the lazy dog.</p>
  <p class="lowercase">The quick brown fox jumps over the lazy dog.</p>
  <p class="capitalize">The quick brown fox jumps over the lazy dog.</p>
  <p class="normal-case">The quick brown fox jumps over the lazy dog.</p>
  <p class="underline">The quick brown fox jumps over the lazy dog.</p>
  <p class="line-through">The quick brown fox jumps over the lazy dog.</p>
</div>

        <div class="btn-group">
          <v-btn to="/docs/customization" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/spaces-sizes" variant="flat" color="primary">Next</v-btn>
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
    p{
      margin-bottom: 10px;
    }
  }
</style>
