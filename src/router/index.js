import Vue from 'vue'
import Router from 'vue-router'
import LocationAlert from '@/components/LocationAlert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      base: process.env.ROOT_BASE,
      path: '/',
      name: 'locationAlert',
      component: LocationAlert
    }
  ]
})
