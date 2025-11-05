import './assets/main.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import AOS from 'aos'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 1000,
  once: false,
  offset: 100,
  delay: 200,
  easing: 'ease-in-out'
})
