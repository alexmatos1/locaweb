import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PlanoView from '../views/PlanoView.vue'
import CadastroView from '../views/CadastroView.vue'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/plano',
      name: 'PlanoView',
      component: PlanoView      
    },
    {
      path: '/cadastro',
      name: 'CadastroView',
      component: CadastroView      
    },
    {
      path: '/index',
      name: 'IndexView',
      component: IndexView      
    }
  ]
})

export default router
