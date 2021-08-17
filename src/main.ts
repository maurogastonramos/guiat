import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/fonts.css'
import router from './router'

createApp(App).use(router).mount('#app')
