import { createHead } from '@unhead/vue/client'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
const head = createHead()
app.use(router)
app.use(head)
app.mount('#app')
