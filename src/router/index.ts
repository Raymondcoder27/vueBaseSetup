import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

declare module "vue-router" {
  interface RouteMeta {
    parentName?: string
    requiresAuth: boolean
  }
}

const appRoutes: RouteRecordRaw[] = [
  {
    path: "/", 
    name: "home",
    meta: {requiresAuth:false},
    component: () => import ("@/layouts/HomeLayout.vue"),
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard", 
        name: "dashboard",
        meta: {requiresAuth: false},
        component: ()=> import ("@/domain/dashboard/Dashboard.vue")
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
