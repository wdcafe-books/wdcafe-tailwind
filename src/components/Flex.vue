<template>
  <div class="flex">
    <v-container>
      <h1>7. Flex</h1>
      
      <section>
        <h2>1. Flex 컨테이너 - 아이템 크기 조절</h2>
        <p>
          <strong>Use flex-initial :</strong> flex-initial을 사용하여 플렉스 아이템이 초기 크기를 고려하여 축소는 가능하지만 확대는 불가능하도록 할 수 있습니다.
        </p>
        <pre><code>&lt;div class="flex"&gt; 
&lt;div class="flex items-center justify-center flex-none w-64 mr-5 bg-blue-500"&gt;
  01
&lt;/div&gt;
&lt;div class="flex items-center justify-center flex-initial w-64 mr-5 bg-blue-500"&gt;
  02
&lt;/div&gt;
&lt;div class="flex items-center justify-center flex-initial w-32 bg-blue-500"&gt;
  03
&lt;/div&gt;
&lt;/div&gt;</code></pre>

        <p>
          <strong>Use flex-1 :</strong> flex-1을 사용하면 플렉스 아이템이 초기 크기를 무시하고 필요에 따라 확대 및 축소할 수 있습니다.
        </p>
        <pre><code>&lt;div class="flex my-10 w-[700px]"&gt;
&lt;div class="flex items-center justify-center flex-none w-64 mr-5 bg-blue-500"&gt;
  01
&lt;/div&gt;
&lt;div class="flex items-center justify-center flex-1 w-64 mr-5 bg-blue-500"&gt;
  02
&lt;/div&gt;
&lt;div class="flex items-center justify-center flex-1 w-32 bg-blue-500"&gt;
  03
&lt;/div&gt;
&lt;/div&gt;</code></pre>

        <p>
          <strong>Use flex-auto :</strong> flex-1을 사용하면 플렉스 아이템이 초기 크기를 무시하고 필요에 따라 확대 및 축소할 수 있습니다.
        </p>
        <pre><code>&lt;div class="flex w-[700px]"&gt;
&lt;div class="flex items-center justify-center flex-none mr-5 bg-blue-500 w-14"&gt;
  01
&lt;/div&gt;
&lt;div class="flex items-center justify-center flex-auto w-64 mr-5 bg-blue-500"&gt;
  02
&lt;/div&gt;
&lt;div class="flex items-center justify-center flex-auto w-32 bg-blue-500"&gt;
  03
&lt;/div&gt;
&lt;/div&gt;</code></pre>

      </section>

      <section>
        <h2>2. Flex Direction - 아이템 방향 설정</h2>
        <p>
          <strong>Use flex-row :</strong> flex-row을 사용하여 플렉스 아이템을 컨테이너의 주축 방향으로 정렬할 수 있습니다.
        </p>
        <pre><code>&lt;!-- Row --&gt;
&lt;div class="flex flex-row gap-5 p-3 mb-8 border-2 border-red-500 w-[700px]"&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;01&lt;/div&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;02&lt;/div&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;03&lt;/div&gt;
&lt;/div&gt;

&lt;div class="flex flex-row-reverse gap-5 p-3 mb-8 border-2 border-red-500 w-[700px]"&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;01&lt;/div&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;02&lt;/div&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;03&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Col --&gt;
&lt;div class="flex flex-col gap-5 p-3 mb-8 border-2 border-red-500 w-[700px]"&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;01&lt;/div&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;02&lt;/div&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;03&lt;/div&gt;
&lt;/div&gt;

&lt;div class="flex flex-col-reverse gap-5 p-3 mb-8 border-2 border-red-500 w-[700px]"&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;01&lt;/div&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;02&lt;/div&gt;
  &lt;div class="w-24 h-24 bg-red-400"&gt;03&lt;/div&gt;
&lt;/div&gt;</code></pre> 
      </section>     

      <section>
        <h2>3. Flex Wrap - 아이템 개행 조절</h2>
        <p>
          <strong>Use flex-wrap :</strong> flex-wrap을 사용하여 플렉스 아이템을 컨테이너의 폭을 넘어갈 때 개행할 수 있습니다.
        </p>
        <pre><code>&lt;div class="flex flex-row p-3 mb-8 border-2 border-red-500 w-[700px] flex-wrap"&gt;
  &lt;div class="w-3/4 h-24 bg-red-400"&gt;01&lt;/div&gt;
  &lt;div class="w-1/4 h-24 bg-blue-400"&gt;02&lt;/div&gt;
  &lt;div class="w-3/4 h-24 bg-red-400"&gt;03&lt;/div&gt;
  &lt;div class="w-1/4 h-24 bg-blue-400"&gt;04&lt;/div&gt;
&lt;/div&gt;</code></pre> 
      </section>     

      <section>
        <h2>4. Flex Align - 아이템 정렬</h2>
        <p>
          <strong>Use flex-align :</strong> flex-align을 사용하여 플렉스 아이템들을 정렬할 수 있습니다.
        </p>
    <pre><code>&lt;div class="flex my-10 w-[700px] border-2 border-blue-500 p-3 gap-5 justify-start"&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    01
  &lt;/div&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    02
  &lt;/div&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    03
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="flex my-10 w-[700px] border-2 border-blue-500 p-3 gap-5 justify-center"&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    01
  &lt;/div&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    02
  &lt;/div&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    03
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="flex my-10 w-[700px] border-2 border-blue-500 p-3 gap-5 justify-end"&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    01
  &lt;/div&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    02
  &lt;/div&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    03
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="flex my-10 w-[700px] border-2 border-blue-500 p-3 gap-5 justify-between"&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    01
  &lt;/div&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    02
  &lt;/div&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    03
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="flex my-10 w-[700px] border-2 border-blue-500 p-3 gap-5 justify-around"&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    01
  &lt;/div&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    02
  &lt;/div&gt;
  &lt;div class="bg-blue-500 w-14 h-14"&gt;
    03
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="flex my-10 w-[300px] h-[300px] border-2 border-blue-500 p-3 gap-5 justify-center items-center"&gt;
  &lt;div class="bg-red-500 w-14 h-14"&gt;
    01
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

        <div class="btn-group"> 
            <v-btn to="/docs/list-property" variant="flat" color="primary">Prev</v-btn>
            <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
            <v-btn to="/docs/grids" variant="flat" color="primary">Next</v-btn>
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
    p{
      margin-bottom: 30px;
    }
  }
</style>