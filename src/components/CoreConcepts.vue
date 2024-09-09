<template>
  <div class="core-concepts">
    <v-container>
      <h1>15. Core Concepts</h1> 
      
      <section>
        <h2>1. 유틸리티 우선 접근법</h2>
        <p>
          Tailwind CSS의 유틸리티 우선 접근법(Utility-First Approach)은 CSS 클래스의 작은 단위인 유틸리티 클래스를 사용하여 스타일을 적용하는 방식입니다. 이 접근법은 전통적인 CSS 작성 방식과는 다르게, 미리 정의된 유틸리티 클래스를 조합하여 HTML 요소에 직접 스타일을 적용합니다. 이를 통해 빠르고 일관된 스타일링이 가능하며, 유지보수와 확장성이 용이합니다.
        </p>
        <ol>
          <li>
            <strong>1) 작고 재사용 가능한 클래스:</strong>
            <p>Tailwind CSS는 bg-blue-500, text-center, p-4 등과 같은 작은 유틸리티 클래스를 제공합니다. 이러한 클래스는 특정 스타일 속성을 캡슐화하여, HTML 요소에 직접 적용할 수 있습니다.</p>
          </li>
          <li>
            <strong>2) 빠른 개발 속도:</strong>
            <p>미리 정의된 유틸리티 클래스를 사용하여 스타일을 적용하므로, CSS를 작성하는 시간을 절약할 수 있습니다. 또한, 클래스 이름만으로 스타일을 쉽게 이해할 수 있어, 협업 시에도 유리합니다.</p>
          </li>
          <li>
            <strong>3) 일관된 디자인:</strong>
            <p>유틸리티 클래스를 사용하면 프로젝트 전반에 걸쳐 일관된 디자인을 유지할 수 있습니다. 이는 디자인 시스템을 구축하고 유지하는 데 도움이 됩니다.</p>
          </li>
          <li>
            <strong>4) 유지보수 용이성:</strong>
            <p>CSS 파일이 아닌 HTML 파일에서 스타일을 관리하므로, 스타일 변경 시 영향을 받는 요소를 쉽게 파악할 수 있습니다. 또한, 불필요한 CSS 코드가 줄어들어 유지보수가 용이합니다.</p>
          </li>
        </ol>
      </section>

      <section>
        <h2>2. 호버, 포커스 및 기타 상태 처리</h2>
        <p>
          유틸리티를 사용하여 호버, 포커스 등의 요소에 스타일을 적용합니다.
        </p>
        <pre><code>&lt;button class="bg-sky-500 hover:bg-sky-700 ..."&gt;
  Save changes
&lt;/button&gt; </code></pre>

<p><button class="px-4 py-2 font-bold text-white rounded-xl bg-sky-500 hover:bg-sky-700">
  Save changes
</button> </p>        
      </section>

      <section>
        <h2>3. 반응형 디자인</h2>
        <p>
          반응형 유틸리티 변형을 사용하여 적응형 사용자 인터페이스를 구축합니다.
        </p>
        <pre><code>&lt;div class="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl"&gt;
  &lt;div class="md:flex"&gt;
    &lt;div class="md:shrink-0"&gt;
      &lt;img class="object-cover w-full h-48 md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"&gt;
    &lt;/div&gt;
    &lt;div class="p-8"&gt;
      &lt;div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase"&gt;Company retreats&lt;/div&gt;
      &lt;a href="#" class="block mt-1 text-lg font-medium leading-tight text-black hover:underline"&gt;Incredible accommodation for your team&lt;/a&gt;
      &lt;p class="mt-2 text-slate-500"&gt;
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </section>

      <section>
        <h2>4. 스타일 재사용</h2>
        <p>
          스타일 재사용을 위해 커스텀 유틸리티를 생성합니다.
        </p>
        <pre class="mb-10"><code>[ 수정전 ]

&lt;div&gt;
  &lt;div class="flex items-center space-x-2 text-base"&gt;
    &lt;h4 class="font-semibold text-slate-900"&gt;Contributors&lt;/h4&gt;
    &lt;span class="px-2 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700"&gt;204&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="flex mt-3 -space-x-2 overflow-hidden"&gt;
    &lt;img class="inline-block w-12 h-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/&gt;
    &lt;img class="inline-block w-12 h-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/&gt;
    &lt;img class="inline-block w-12 h-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt=""/&gt;
    &lt;img class="inline-block w-12 h-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/&gt;
    &lt;img class="inline-block w-12 h-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/&gt;
  &lt;/div&gt;
  &lt;div class="mt-3 text-sm font-medium"&gt;
    &lt;a href="#" class="text-blue-500"&gt;+ 198 others&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<pre><code>[ 수정후 ]
          
&lt;div&gt;
  &lt;div class="flex items-center space-x-2 text-base"&gt;
    &lt;h4 class="font-semibold text-slate-900"&gt;Contributors&lt;/h4&gt;
    &lt;span class="px-2 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700"&gt;204&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="flex mt-3 -space-x-2 overflow-hidden"&gt;
    {#each contributors as user}
      &lt;img class="inline-block w-12 h-12 rounded-full ring-2 ring-white" src="{user.avatarUrl}" alt="{user.handle}"/&gt;
    {/each}
  &lt;/div&gt;
  &lt;div class="mt-3 text-sm font-medium"&gt;
    &lt;a href="#" class="text-blue-500"&gt;+ 198 others&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<div class="w-1/5 mt-3 border pa-8">
    <div class="flex items-center space-x-2 text-base">
      <h4 class="font-semibold text-slate-900">Contributors</h4>
      <span class="px-2 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700">204</span>
    </div>
    <div class="flex my-5 -space-x-2 overflow-hidden">
      <img
        v-for="user in contributors"
        :key="user.handle"
        class="inline-block w-12 h-12 rounded-full ring-2 ring-white"
        :src="user.avatarUrl"
        :alt="user.handle"
      />
    </div>
    <div class="mt-3 text-sm font-medium">
      <a href="#" class="text-blue-500">+ 198 others</a>
    </div>
  </div>
      </section>

      <section>
        <h2>5. 사용자 정의 스타일 추가</h2>
        <p>
          프레임워크를 사용할 때 가장 큰 과제는 프레임워크에서 처리하지 못하는 작업이 있을 때 어떻게 해야 할지 파악하는 것입니다. <br>
          Tailwind는 처음부터 확장 가능하고 사용자 정의가 가능하도록 설계되었으므로 무엇을 만들든 프레임워크와 싸우는 느낌이 들지 않습니다. <br>
          이 가이드에서는 디자인 토큰을 사용자 정의하는 방법, 필요한 경우 제약을 벗어나는 방법, 사용자 정의 CSS를 추가하는 방법, 플러그인을 사용하여 프레임워크를 확장하는 방법 등의 주제를 다룹니다.
        </p>

        <h3 class="mt-10 mb-5 text-2xl font-bold">1) 테마 사용자 정의</h3>
        <p>
          색상 팔레트, 간격 크기, 타이포그래피 크기 또는 중단점과 같은 항목을 변경하려면 파일 theme섹션에 사용자 지정 내용을 추가하세요.
        </p>
        <pre><code> [tailwind.config.js]
          
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
} </code></pre>

        <h3 class="mt-10 mb-5 text-2xl font-bold">2) 임의의 값 사용</h3>
        <p>
          일반적으로 제한된 일련의 디자인 토큰을 사용하여 잘 만들어진 디자인의 대부분을 구축할 수 있지만, 가끔은 이러한 제약에서 벗어나 픽셀 단위까지 완벽한 디자인을 만들어야 할 때가 있습니다.
        </p>
        <pre class="mb-10"><code>&lt;div class="bg-[#bada55] text-[22px] before:content-['hello\_world']"&gt;
 Tailwind의 대괄호 표기법을 사용하여 임의의 값으로 클래스를 즉시 생성할 수 있습니다.
&lt;/div&gt;</code></pre>
<pre><code>&lt;div class="bg-[url('/what_a_rush.png')]"&gt;
 임의의 값에 공백이 포함되어야 하는 경우 _대신 밑줄( )을 사용하면 Tailwind가 빌드 시 자동으로 공백으로 변환합니다.
&lt;/div&gt;</code></pre>

        <h3 class="mt-10 mb-5 text-2xl font-bold">3) @ 적용하다</h3>  
        <p>
          '@apply' 기존 유틸리티 클래스를 사용자 정의 CSS에 인라인으로 적용하는 데 사용합니다. 이 기능은 사용자 지정 CSS를 작성해야 할 때(예: 타사 라이브러리의 스타일을 재정의하는 경우) 유용하지만, 여전히 디자인 토큰을 사용하고 HTML에서 사용하는 것과 동일한 구문을 사용하려는 경우에도 유용합니다.
        </p> 

        <pre class="mb-10"><code>&lt;style&gt;
  .btn-primary {
    @apply py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
  }
&lt;/style&gt;</code></pre>

<pre><code>[ HTML ] 

&lt;!-- Before extracting a custom class --&gt;
&lt;button class="px-5 py-2 font-semibold text-white rounded-full shadow-md bg-violet-500 hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"&gt;
  Save changes
&lt;/button&gt;


[ tailwind.css ]

&lt;!-- After extracting a custom class --&gt;
&lt;button class="btn-primary"&gt;
  Save changes
&lt;/button&gt;</code></pre>

        <div class="btn-group">  
          <v-btn to="/docs/design-system" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/dark-mode" variant="flat" color="primary">Next</v-btn>
        </div>
      </section>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const contributors = ref([
  { handle: 'user1', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80' },
  { handle: 'user2', avatarUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80' },
  { handle: 'user3', avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80' },
  { handle: 'user4', avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80' },
  { handle: 'user5', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80' },
  // 추가 사용자 데이터
]);
</script>

<style scoped lang="scss">
.v-container {
  p{
    margin-bottom: 30px;
  }
}
</style>
