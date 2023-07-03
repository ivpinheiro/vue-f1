import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ElementManager from '../views/ElementManager.vue'
import EditElement from '../views/EditElement.vue'
import ViewElement from '../views/ViewElement.vue'
import PageNotFound from '../views/PageNotFound.vue'
import LoginPage from '../views/LoginPage.vue'
import AboutView from '../views/AboutView.vue'
import DashboardPage from '../views/DashboardPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/elements',
    name: 'ElementManager',
    component: ElementManager
  },
  {
    path: '/elements/edit/:elementId',
    name: 'EditElement',
    component: EditElement
  },
  {
    path: '/elements/view/:elementId',
    name: 'ViewElement',
    component: ViewElement
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/dash',
    name: 'DashboardPage',
    component: DashboardPage
  }            
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
