import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/Welcome'
import PluginList from '../components/PluginList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/pluginList',
    name: 'pluginList',
    component: PluginList
  }
]

const router = new VueRouter({
  routes
})

export default router
