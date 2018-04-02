import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/pages/index'
import detailPage from '@/pages/detail'
import analysisPage from '@/pages/detail/analysis'
import countPage from '@/pages/detail/count'
import forecastPage from '@/pages/detail/forecast'
import publishPage from '@/pages/detail/publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path:'/detail',
      name:'detailPage',
      component:detailPage,
      children:[
        {
          path:'analysis',
          component:analysisPage
        },
        {
          path:'count',
          component:countPage
        },
        {
          path:'forecast',
          component:forecastPage
        },
        {
          path:'publish',
          component:publishPage
        }
      ]
    }
  ]
})
