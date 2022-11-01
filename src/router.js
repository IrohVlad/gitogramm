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
  component: auth
},
{
  path: '/profile',
  component: profile
}]
export default createRouter({
  history: createWebHashHistory(),
  routes
})
