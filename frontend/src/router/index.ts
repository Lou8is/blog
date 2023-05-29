import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Blog from '../views/ArticlesView.vue'
import Tuto from '../views/TutorialsView.vue'
import About from '../views/AboutView.vue'
import Admin from '../views/AdminView.vue'
import Login from '../views/LoginView.vue'

import Auth from './auth';

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
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: async (to, from) => { return guardAdmin()},
    },    
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: async (to, from) => { return guardAlreadyLogged()},
    },
  ]
})

async function guardAdmin(): Promise<string | boolean> {
  if (!Auth.isUserAdmin())
    return '/login';
  else
    return true;
}

async function guardAlreadyLogged(): Promise<string | boolean> {
  if (Auth.isLoggedIn())
    return '/';
  else
    return true;
}



export default router
