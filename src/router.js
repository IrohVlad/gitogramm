import { createRouter, createWebHashHistory } from 'vue-router'
import { feeds } from './pages/feeds'
import { slider } from './pages/slider'
import { auth } from './pages/auth'
import { profile } from './pages/profile'

const routes = [{
  path: '/',
  component: feeds
},
{
  path: '/slider',
  component: slider
},
{
  path: '/auth',
  name: 'auth',
  component: auth
},
{
  path: '/profile',
  component: profile
}]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'
  if (authRoute) {
    next()
    return
  }
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`
      }
    })
    if (response.status === 401) {
      throw new Error()
    }
    next()
  } catch (error) {
    next({ name: 'auth' })
  }
})
export default router
