<template>
  <div class="list-property">
    <v-container>
      <h1>6. List & Property</h1>
      
      <section>
        <h2>1. 리스트 스타일</h2> 
        <p>
          Tailwind CSS는 다양한 리스트 스타일 클래스를 제공합니다.
        </p>
        <pre><code>&lt;ul class="list-disc"&gt;
  &lt;li&gt;항목 1&lt;/li&gt;
  &lt;li&gt;항목 2&lt;/li&gt;
  &lt;li&gt;항목 3&lt;/li&gt;
&lt;/ul&gt;

&lt;ol class="list-decimal"&gt;
  &lt;li&gt;항목 1&lt;/li&gt;
  &lt;li&gt;항목 2&lt;/li&gt;
  &lt;li&gt;항목 3&lt;/li&gt;
&lt;/ol&gt;        </code></pre>

        <div class="example">
          <ul class="mb-4 list-disc list-inside">
            <li>항목 1</li>
            <li>항목 2</li>
            <li>항목 3</li>
          </ul>

          <ol class="list-decimal list-inside">
            <li>항목 1</li> 
            <li>항목 1</li> 
            <li>항목 1</li> 
          </ol>
        </div>  
      </section>

      <section>
        <h2>2. 속성 커스터마이징</h2>
        <p>
          Tailwind CSS는 다양한 속성 커스터마이징을 지원합니다.
        </p>
        <pre><code>&lt;div class="mb-5 pt-6 bg-blue-500 w-[100px] h-[100px]"&gt;pt-6&lt;/div&gt;
&lt;div class="mb-5 bg-blue-500 w-[100px] h-[100px]"&gt;pr-4&lt;/div&gt;
&lt;div class="mb-5 mr-7 bg-blue-500 w-[200px] h-[200px]"&gt;pb-8&lt;/div&gt;
 
&lt;!-- Rounded --&gt;
&lt;div class="mb-8 mr-7 font-bold rounded w-[150px] h-[150px] bg-violet-400"&gt;rounded&lt;/div&gt;
&lt;div class="mb-8 mr-7 font-bold rounded-md w-[150px] h-[150px] bg-violet-400"&gt;rounded-md&lt;/div&gt;
&lt;div class="mb-8 mr-7 font-bold rounded-lg w-[150px] h-[150px] bg-violet-400"&gt;rounded-lg&lt;/div&gt;
&lt;div class="mb-8 mr-7 font-bold rounded-xl w-[150px] h-[150px] bg-violet-400"&gt;rounded-xl&lt;/div&gt;
&lt;div class="mb-8 mr-7 font-bold rounded-full w-[150px] h-[150px] bg-violet-400"&gt;rounded-full&lt;/div&gt;

&lt;p&gt;
  &lt;button class="w-[150px] h-[50px] rounded-full bg-green-400 mr-7"&gt;Save Changes&lt;/button&gt; 
  &lt;button class="w-[150px] h-[50px] rounded-none bg-green-400"&gt;Save Changes&lt;/button&gt;
&lt;/p&gt;  </code></pre>

        <div class="example">
          <div class="flex">
            <div class="bg-blue-500 w-[100px] h-[100px] mr-4 mb-7">w-[100px] h-[100px]</div>
            <div class="bg-blue-500 w-[200px] h-[200px] mb-7">w-[200px] h-[200px]</div>
          </div>
 
          <!-- Rounded -->
          <div class="flex">
            <div class="mb-8 mr-7 font-bold rounded w-[150px] h-[150px] bg-violet-400 flex items-center justify-center">rounded</div>
            <div class="mb-8 mr-7 font-bold rounded-md w-[150px] h-[150px] bg-violet-400 flex items-center justify-center">rounded-md</div>
            <div class="mb-8 mr-7 font-bold rounded-lg w-[150px] h-[150px] bg-violet-400 flex items-center justify-center">rounded-lg</div>
            <div class="mb-8 mr-7 font-bold rounded-xl w-[150px] h-[150px] bg-violet-400 flex items-center justify-center">rounded-xl</div>
            <div class="mb-8 mr-7 font-bold rounded-full w-[150px] h-[150px] bg-violet-400 flex items-center justify-center">rounded-full</div> 
          </div> 

          <p>
            <button class="w-[150px] h-[50px] rounded-full bg-green-400 mr-7">Save Changes</button>
            <button class="w-[150px] h-[50px] rounded-none bg-green-400">Save Changes</button>
          </p>  
        </div>

        <div class="btn-group">
          <v-btn to="/docs/spaces-sizes" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/flex" variant="flat" color="primary">Next</v-btn> 
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
section {
  margin-bottom: 2rem;
}
</style>
