<template>
  <div class="setup">
    <v-container>
      <h1>1. Setup</h1>
      <section>
        <h2>1. Tailwind CSS 설치</h2>
        <p>
          npm을 사용하여 Tailwind CSS를 설치하는 방법은 다음과 같습니다:
        </p>
        <pre><code>// 작업폴더 생성
mkdir src dist dist/js dist/css  

// 파일 생성
touch dist/index.html dist/js/main.js dist/css/main.css src/tailwind.css

// package.json 생성
npm init -y

// 패키지 설치
npm i -D tailwindcss @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio @tailwindcss/container-queries</code></pre>
      </section>

      <section>
        <h2>2. Tailwind 설정 파일 생성</h2>
        <p>
          다음 명령어를 실행하여 Tailwind 설정 파일을 생성합니다: 이 명령어는 tailwind.config.js 파일을 생성합니다.
        </p>
        <pre><code>npx tailwindcss init -p</code></pre>
      </section>

      <section>
        <h2>3. Tailwind 설정 파일 수정</h2>
        <p>
          tailwind.config.js 파일을 열고 content 배열에 프로젝트의 템플릿 파일 경로를 추가합니다:
        </p>
        <pre><code>/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./dist/**/*.{html,js}"],
theme: {
extend: {},
},
plugins: [
require('@tailwindcss/typography'),
require('@tailwindcss/forms'),
require('@tailwindcss/aspect-ratio'),
require('@tailwindcss/container-queries'),
],
}</code></pre>
      </section>

      <section>
        <h2>4. Tailwind 지시어 추가</h2>
        <p>
          tailwind.css 파일에 Tailwind의 기본 스타일을 추가합니다:
        </p>
        <pre><code>@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';</code></pre>
      </section>

      <section>
        <h2>5. Package.json 수정</h2>
        <p>
          package.json 파일에 watch 스크립트를 추가합니다:
        </p>
        <pre><code>"scripts": {
"name": "tailwind-cli",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"watch": "npx tailwindcss -i ./src/tailwind.css -o ./dist/css/main.css --watch"
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"@tailwindcss/aspect-ratio": "^0.4.2",
"@tailwindcss/container-queries": "^0.1.1",
"@tailwindcss/forms": "^0.5.6",
"@tailwindcss/typography": "^0.5.10",
"tailwindcss": "^3.3.3"
}
}</code></pre>
      </section>

      <section>
        <h2>6. index.html 내용 추가</h2>
        <p>
          index.html 파일에 다음 내용을 추가합니다:
        </p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;title&gt;TailWindCSS - CLI&lt;/title&gt;
&lt;link rel="stylesheet" href="./css/main.css"&gt;
&lt;script defer src="./js/main.js"&gt;&lt;/script&gt;
&lt;link rel="shortcut icon" href="./favicon.ico"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1 class="my-8 text-5xl text-center text-blue-500"&gt;Hello TailWind~!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </section>

      <section>
        <h2>7. 빌드 프로세스 실행</h2>
        <p>
          프로젝트를 빌드하여 Tailwind CSS 스타일을 적용합니다:
        </p>
        <pre><code>npm run build</code></pre>

        <div class="btn-group">
          <v-btn to="/docs" variant="flat" color="primary" >Home</v-btn> 
          <v-btn to="/docs/colors" variant="flat" color="primary" class="mx-2">Next</v-btn>
        </div>
      </section>
    </v-container>
  </div>
</template>

<script setup>
// 필요한 경우 여기에 스크립트 로직을 추가하세요
</script>

<style scoped lang="scss">
.setup {
  section {
    margin-bottom: 70px; 

    pre{
      padding: 30px 20px;
    }
  }
}
</style>
