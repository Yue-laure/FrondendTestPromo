import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'router-link-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/accueil',
      name: 'accueil',
      component: () => import('../views/AccueilView.vue')
    },
    {
      path: '/recherche',
      name: 'recherche',
      component: () => import('../views/RechercheView.vue')
    },
    {
      path: '/foncier',
      name: 'foncier',
      component: () => import('../views/FoncierView.vue')
    }
    ,
    {
      path: '/Operationnel',
      name: 'Operationnel',
      component: () => import('../views/OperationnelView.vue')
    },
    {
      path: '/gestion-documentaire',
      name: 'gestion-documentaire',
      component: () => import('../views/GestionDocView.vue')
    }
  ]
})

export default router
