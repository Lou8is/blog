import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Article from '@/views/Articles/ArticlesView.vue'
import AddArticle from '@/views/Articles/AddArticleView.vue'
import Tuto from '@/views/Tutorials/TutorialsView.vue'
import About from '@/views/AboutView.vue'
import Admin from '@/views/AdminView.vue'
import Login from '@/views/LoginView.vue'
import NotFound from '@/views/NotFoundView.vue'

import Auth from '@/services/authService'

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
      component: Article
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
      path: '/admin/articles/new',
      name: 'newArticle',
      component: AddArticle,
      beforeEnter: async (to, from) => { return guardAdmin()},
    },    
    {
      path: '/login/:token?',
      name: 'login',
      component: Login,
      beforeEnter: async (to, from) => { return guardAlreadyLogged()},
    },    
    {
      path: "/:notFound",
      component: NotFound,
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
