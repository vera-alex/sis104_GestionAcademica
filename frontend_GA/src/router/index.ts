import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores'
import { getTokenFromLocalStorage } from '@/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/UsuarioView.vue'),
      children: [
        { path: '', component: () => import('../components/usuario/UsuarioList.vue') },
        { path: 'crear', component: () => import('../components/usuario/UsuarioCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/usuario/UsuarioEdit.vue')
        }
      ]
    },
    {
      path: '/docentes',
      name: 'docentes',
      component: () => import('../views/DocenteView.vue'),
      children: [
        { path: '', component: () => import('../components/docente/DocenteList.vue') },
        { path: 'crear', component: () => import('../components/docente/DocenteCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/docente/DocenteEdit.vue')
        }
      ]
    },
    {
      path: '/estudiantes',
      name: 'estudiantes',
      component: () => import('../views/EstudianteView.vue'),
      children: [
        { path: '', component: () => import('../components/estudiante/EstudianteList.vue') },
        { path: 'crear', component: () => import('../components/estudiante/EstudianteCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/estudiante/EstudianteEdit.vue')
        }
      ]
    },
    {
      path: '/asistencias',
      name: 'asistencias',
      component: () => import('../views/AsistenciaView.vue'),
      children: [
        { path: '', component: () => import('@/components/asistencia/AsistenciaList.vue') }
      ]
    },
    {
      path: '/rendimientos',
      name: 'rendimientos',
      component: () => import('../views/RendimientoView.vue'),
      children: [
        { path: '', component: () => import('../components/rendimiento/RendimientoList.vue') }
      ]
    },
    {
      path: '/literaturas',
      name: 'literaturas',
      component: () => import('../views/LiteraturaView.vue'),
      children: [
        { path: '', component: () => import('../components/literatura/LiteraturaList.vue') }
      ]
    },
    {
      path: '/extranjeras',
      name: 'extranjeras',
      component: () => import('../views/ExtranjeraView.vue'),
      children: [
        { path: '', component: () => import('../components/extranjera/ExtranjeraList.vue') }
      ]
    },
    {
      path: '/contactar',
      name: 'contactar',
      component: () => import('../views/ContactarView.vue'),
      children: [{ path: '', component: () => import('../components/contactar/ContactarForm.vue') }]
    }
  ]
})

router.beforeEach(async (to) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout()
    authStore.returnUrl = to.fullPath
    return '/login'
  }
})

export default router
