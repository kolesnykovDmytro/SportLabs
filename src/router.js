import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DevelopDepart from './pages/DevelopDepart.vue'
import HrDepart from './pages/HrDepart.vue'
import MarketingDepart from './pages/MarketingDepart.vue'
import TestingDepart from './pages/TestingDepart.vue'
import UserDetails from './components/UserDetails.vue'
import AddUser from './components/AddUser.vue'
import AccountingDepart from './pages/AccountingDepart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/develop-list',
      component: DevelopDepart
    },
    {
      path: '/marketing-list',
      name: 'Marketing',
      component: MarketingDepart
    },
    {
      path: '/hr-list',
      name: 'Hr',
      component: HrDepart
    },
    {
      path: '/testing-list',
      name: 'Testing',
      component: TestingDepart
    },
    {
      path: '/accounting-list',
      name: 'Accounting',
      component: AccountingDepart
    },
    {
      path: '/detail/:id',
      component: UserDetails
    },
    {
      path: '/add',
      component: AddUser
    },
    {
      path: '*',
      component: Home
    }
  ]
})
