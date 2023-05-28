import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Blog from '../views/ArticlesView.vue'
import Tuto from '../views/TutorialsView.vue'
import About from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/articles',
        name: 'articles',
        component: Blog
    },
    {
        path: '/tutorials',
        name: 'tutorials',
        component: Tuto
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
  ]
})

export default router
