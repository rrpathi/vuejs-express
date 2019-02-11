import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        requiresAuth: true
      },
      redirect: 'dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if (requiresAuth) {
    if (localStorage.getItem('jwt_auth') == null) {
      console.log('null')
      next('/login')
    } else {
      console.log('Login Success')
      next()
    }
  } else {
    next()
  }
})
export default router
