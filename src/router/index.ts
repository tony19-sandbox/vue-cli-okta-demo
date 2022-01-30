import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { navigationGuard, LoginCallback } from '@okta/okta-vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  { path: '/login/callback', component: LoginCallback },
  {
    path: '/protected',
    component: () => import(/* webpackChunkName: "protected" */ '../views/ProtectedView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Due to navigation guards mixin issue in vue-router-next, navigation guard logic need to be added manually
router.beforeEach(navigationGuard)

export default router
