import './assets/main.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 1000,
  once: false,
  offset: 100,
  delay: 200,
  easing: 'ease-in-out'
})
