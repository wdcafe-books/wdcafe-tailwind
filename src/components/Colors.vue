<template>
  <div class="colors">
    <v-container>
      <h1>2. Colors</h1>
      
      <section>
        <h2>1. 색상 사용 방법</h2>
        <p>
          Tailwind CSS에서는 다양한 색상 클래스를 제공합니다. 텍스트, 배경, 테두리 등에 색상을 적용할 수 있습니다.
        </p>
        <pre><code>&lt;p class="text-blue-500"&gt;파란색 텍스트&lt;/p&gt;
&lt;div class="bg-red-200"&gt;빨간색 배경&lt;/div&gt;
&lt;button class="border-2 border-green-400"&gt;초록색 테두리 버튼&lt;/button&gt;        </code></pre>
      </section>

      <section>
        <h2>2. 색상 팔레트</h2>
        <p>
          Tailwind CSS는 기본적으로 다양한 색상 팔레트를 제공합니다. 각 색상은 50부터 900까지의 음영을 가집니다.
        </p>
        <ul class="text-xl list-disc list-inside">
          <li>gray</li>
          <li>red</li>
          <li>yellow</li>
          <li>green</li>
          <li>blue</li>
          <li>indigo</li>
          <li>purple</li>
          <li>pink</li>
        </ul>
      </section>

      <section>
        <h2>3. 커스텀 색상 추가</h2>
        <p>
          tailwind.config.js 파일에서 커스텀 색상을 추가할 수 있습니다:
        </p>
        <pre><code>module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1da1f2', // 커스텀 색상 추가
      },
    },
  },
}      

[ HTML ]
&lt;div class="text-custom-blue"&gt;커스텀 색상 배경&lt;/div&gt;
</code></pre>
      </section>

      <section>
        <h2>4. 색상 클래스 사용 예시(1)</h2>
        <p>
          Tailwind CSS에서 제공하는 색상 클래스를 사용하여 다양한 요소의 색상을 설정할 수 있습니다.
        </p>
        <div class="flex flex-col gap-4">
          <div class="p-4 text-white bg-blue-500">파란색 배경</div>
          <div class="p-4 text-white bg-red-500">빨간색 배경</div>
          <div class="p-4 text-white bg-green-500">초록색 배경</div>
          <div class="p-4 text-white bg-yellow-500">노란색 배경</div>
          <div class="p-4 text-white bg-purple-500">보라색 배경</div>
          <div class="p-4 text-white bg-pink-500">분홍색 배경</div>
        </div>
      </section>

      <section>
        <h2>5. 색상 클래스 사용 예시(2)</h2>

        <div class="grid grid-cols-10 gap-2 my-10">
          <div class="w-10 h-10 bg-blue-50 aspect-square"></div>
          <div class="w-10 h-10 bg-blue-100 aspect-square"></div>
          <div class="w-10 h-10 bg-blue-200 aspect-square"></div>
          <div class="w-10 h-10 bg-blue-300 aspect-square"></div>
          <div class="w-10 h-10 bg-blue-400 aspect-square"></div>
          <div class="w-10 h-10 bg-blue-500 aspect-square"></div>
          <div class="w-10 h-10 bg-blue-600 aspect-square"></div>
          <div class="w-10 h-10 bg-blue-700 aspect-square"></div>
          <div class="w-10 h-10 bg-blue-800 aspect-square"></div>
          <div class="w-10 h-10 bg-blue-900 aspect-square"></div>
        </div>

        <div class="grid grid-cols-10 gap-2 my-10">
          <div class="w-10 h-10 bg-red-50 aspect-square"></div>
          <div class="w-10 h-10 bg-red-100 aspect-square"></div>
          <div class="w-10 h-10 bg-red-200 aspect-square"></div>
          <div class="w-10 h-10 bg-red-300 aspect-square"></div>
          <div class="w-10 h-10 bg-red-400 aspect-square"></div>
          <div class="w-10 h-10 bg-red-500 aspect-square"></div>
          <div class="w-10 h-10 bg-red-600 aspect-square"></div>
          <div class="w-10 h-10 bg-red-700 aspect-square"></div>
          <div class="w-10 h-10 bg-red-800 aspect-square"></div>  
          <div class="w-10 h-10 bg-red-900 aspect-square"></div>
        </div>

        <div class="grid grid-cols-10 gap-2 my-10">
          <div class="w-10 h-10 bg-yellow-50 aspect-square"></div>
          <div class="w-10 h-10 bg-yellow-100 aspect-square"></div>
          <div class="w-10 h-10 bg-yellow-200 aspect-square"></div>
          <div class="w-10 h-10 bg-yellow-300 aspect-square"></div>
          <div class="w-10 h-10 bg-yellow-400 aspect-square"></div>
          <div class="w-10 h-10 bg-yellow-500 aspect-square"></div>
          <div class="w-10 h-10 bg-yellow-600 aspect-square"></div>
          <div class="w-10 h-10 bg-yellow-700 aspect-square"></div>   
          <div class="w-10 h-10 bg-yellow-800 aspect-square"></div>
          <div class="w-10 h-10 bg-yellow-900 aspect-square"></div>
        </div>

        <div class="grid grid-cols-10 gap-2 my-10">
          <div class="w-10 h-10 bg-green-50 aspect-square"></div>
          <div class="w-10 h-10 bg-green-100 aspect-square"></div>
          <div class="w-10 h-10 bg-green-200 aspect-square"></div>
          <div class="w-10 h-10 bg-green-300 aspect-square"></div>
          <div class="w-10 h-10 bg-green-400 aspect-square"></div>
          <div class="w-10 h-10 bg-green-500 aspect-square"></div>
          <div class="w-10 h-10 bg-green-600 aspect-square"></div>
          <div class="w-10 h-10 bg-green-700 aspect-square"></div>    
          <div class="w-10 h-10 bg-green-800 aspect-square"></div>
          <div class="w-10 h-10 bg-green-900 aspect-square"></div>
        </div>

        <div class="btn-group">
          <v-btn to="/docs/setup" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn>  
          <v-btn to="/docs/customization" variant="flat" color="primary">Next</v-btn>
        </div>
      </section>
    </v-container>
  </div>
</template>

<script setup>
// 필요한 경우 여기에 스크립트 로직을 추가하세요
</script>

<style scoped lang="scss">
  section{
    margin-bottom: 70px;

    ul{
      font-size: 1.9rem;

      li{
        margin-bottom: 10px;
      }
    }
  }
</style>
