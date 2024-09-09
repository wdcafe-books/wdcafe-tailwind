import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'font-awesome/css/font-awesome.min.css'
import { loadFonts } from './plugins/webfontloader'
import './style.css' // Tailwind CSS 스타일 불러오기

loadFonts()

// 커스터마이징된 부트스트랩 SCSS를 임포트합니다
import './assets/scss/main.scss';

// jQuery를 임포트합니다
import 'jquery/dist/jquery.min.js';

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')