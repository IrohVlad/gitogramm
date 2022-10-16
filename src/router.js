import { createRouter, createWebHashHistory } from 'vue-router'
import { feeds } from './pages/feeds'
import { slider } from './pages/other'

const routes = [{
  path: '/',
  component: feeds
},
{
  path: '/slider',
  component: slider
}]
export default createRouter({
  history: createWebHashHistory(),
  routes
})
