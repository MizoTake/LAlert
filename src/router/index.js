import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'
import App from '@/components/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/',
      name: 'Map',
      component: Map
    }
  ]
})
