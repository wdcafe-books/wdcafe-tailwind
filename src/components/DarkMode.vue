<template>
  <div class="dark-mode">
    <v-container>
      <h1>16. Dark Mode</h1>
      
      <section>
        <h2>1. 다크 모드 소개 및 설정</h2>
        <p>
          이제 다크 모드가 많은 운영체제의 기본 기능이 되면서, 기본 디자인에 맞춰 웹사이트의 다크 버전을 디자인하는 것이 점점 더 일반화되고 있습니다.<br> 이를 가능한 한 쉽게 하기 위해 Tailwind에는 dark다크 모드가 활성화되어 있을 때 사이트 스타일을 다르게 지정할 수 있는 변형이 포함되어 있습니다.
        </p>
        <pre><code>[tailwind.config.js]

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  // ...
}  </code></pre> 
      </section>

      <section>
        <h2>2. 다크 모드 스타일링</h2>
        <p>
          다크 모드에서 요소들을 스타일링하는 방법을 소개합니다.
        </p>
        <pre><code>[ HTML ]

&lt;!-- Dark mode not enabled --&gt;
&lt;html&gt;
&lt;body&gt;
  &lt;!-- Will be white --&gt;
  &lt;div class="bg-white dark:bg-black"&gt;
    &lt;!-- ... --&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;

&lt;!-- Dark mode enabled --&gt;
&lt;html class="dark"&gt;
&lt;body&gt;
  &lt;!-- Will be black --&gt;
  &lt;div class="bg-white dark:bg-black"&gt;
    &lt;!-- ... --&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;  </code></pre> 
      </section>

      <section>
        <h2>3. 다크 모드 토글</h2>
        <p>
          사용자가 버튼을 클릭하여 다크 모드를 전환할 수 있는 토글 기능 구현 방법을 소개합니다.
        </p>

        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="ko"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;다크 모드 예제&lt;/title&gt;
  &lt;link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css" rel="stylesheet"&gt;
  &lt;script&gt;
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
    }
  &lt;/script&gt;
&lt;/head&gt;
&lt;body class="text-black transition-colors duration-500 bg-white dark:bg-black dark:text-white"&gt;
  &lt;div class="container p-4 mx-auto"&gt;
    &lt;h1 class="mb-4 text-4xl font-bold"&gt;다크 모드 예제&lt;/h1&gt;
    &lt;p class="mb-4"&gt;이것은 다크 모드에서의 텍스트입니다.&lt;/p&gt;
    &lt;button onclick="toggleDarkMode()" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"&gt;
      다크 모드 토글
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

        <div class="btn-group"> 
          <v-btn to="/docs/core-concepts" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
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
