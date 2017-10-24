import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import ProfileRomulo from '@/components/ProfileRomulo'
import ProfileDali from '@/components/ProfileDali'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProfileRomulo',
      component: ProfileRomulo
    },
    {
      path: '/ProfileDali',
      name: 'ProfileDali',
      component: ProfileDali	
    }
  ]
})
