<template>
  <div class="customization">
    <v-container>
      <h1>3. Customization</h1>
      
      <section class="mb-12">
        <h2>1. 설정 파일 수정</h2>
        <p>
          tailwind.config.js 파일을 수정하여 Tailwind CSS를 커스터마이징할 수 있습니다.
        </p>
        <pre><code>/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    // Custom Breakpoint Settings
    container: {
      center: true,
    },    
    screens: {
      sm: '480px',
      ml: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // Spacing Settings
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '22px',
      '3xl': '24px',
    },
  }
}        </code></pre>
      </section>

      <section class="mb-12">
        <h2>2. 테마 확장</h2>
        <p>
          테마 섹션에서 색상, 폰트, 간격 등을 확장하거나 수정할 수 있습니다.
        </p>
        <pre><code>[tailwind.config.js]
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // 'custom-color': '#c60'
        'custom-color': {
          50: '#fff2e6',
          100: '#ffe5cc',
          200: '#ffcb99',
          300: '#ffb166',
          400: '#ff9733',
          500: '#cc6600',
          600: '#a35200',
          700: '#7a3d00',
          800: '#522900',
          900: '#291400',
        }
      }
    },
  },
}

[html]
&lt;p class="text-custom-color-500"&gt;Custom Color&lt;/p&gt; </code></pre>
      </section>

      <section class="mb-12">
        <h2>3. 플러그인 추가</h2>
        <p>
          플러그인을 사용하여 추가 기능을 구현할 수 있습니다.
        </p>

        <pre><code>/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    // New Value Add Settings
    extend: {
      // Custom Color Setting
      colors: {
        custom-color: "#c60"
      },      
    },
  },
  // Plugin Settings
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}</code></pre>

        <div class="btn-group">
          <v-btn to="/docs/colors" variant="flat" color="primary">Prev</v-btn>
          <v-btn to="/docs" variant="flat" color="primary" class="mx-2">Home</v-btn> 
          <v-btn to="/docs/typography" variant="flat" color="primary">Next</v-btn>
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
