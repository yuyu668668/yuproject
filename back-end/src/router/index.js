import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Manage from '@/pages/manage'
import Home from '@/pages/home'
import DataTotal from '@/pages/dataTotal'
import InformationManage from '@/pages/informationManage'
import Carousel from '@/pages/carousel'
import PostingManage from '@/pages/postingManage'
import PostingList from '@/pages/postingList'
import PostingCategory from '@/pages/postingCategory'
import UserManage from '@/pages/userManage'
import SystemManage from '@/pages/systemManage'
import MiniProgramManage from '@/pages/miniProgramManage'
import GoodsList from '@/pages/goodsList'
import OrderList from '@/pages/orderList'
import MiniProgramDesign from '@/pages/miniProgramDesign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/manage',
      component: Manage,
      name: 'manage',
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home,
          name: 'home',
          children: [
            {
              path: '/dataTotal',
              component: DataTotal
            },
            {
              path: '/goodsList',
              component: GoodsList
            },
            {
              path: '/orderList',
              component: OrderList
            }
          ]
        },
        {
          path: '/informationManage',
          component: InformationManage,
          children: [
            {
              path: '/carousel',
              component: Carousel
            }
          ]
        },
        {
          path: '/postingManage',
          component: PostingManage,
          children: [
            {
              path: '/postingList',
              component: PostingList
            },
            {
              path: '/postingCategory',
              component: PostingCategory
            }
          ]
        },
        {
          path: '/userManage',
          component: UserManage
        },
        {
          path: '/systemManage',
          component: SystemManage
        },
        {
          path: '/miniProgramManage',
          component: MiniProgramManage,
          children: [
            {
              path: '/miniProgramDesign',
              component: MiniProgramDesign
            }
          ]
        }
      ]
    }
  ]
})
