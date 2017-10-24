import Vue from 'vue'
import Router from 'vue-router'
import Messi from '@/components/Messi'
import Cr7 from '@/components/Cr7'
import Melhoresdomundo from '@/components/Melhoresdomundo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Messi',
      component:Messi
    }, 
    {
      path: '/cr7',
      name: 'Cr7',
      component: Cr7
    },
	{
	 path: '/melhoresdomundo',
     name: 'Melhoresdomundo',
     component: Melhoresdomundo
	}   
  ]
})
