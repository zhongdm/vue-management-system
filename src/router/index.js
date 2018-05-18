import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

const router = new Router({
  routes: [
  {
    path: '/login',
    name: '登录页',
    // component: resolve => require(['@/views/login'], resolve)
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/home'),
    children: [
      {
        path: '',
        redirect: 'visual'
      },
      {
        path: 'css-design',
        name: 'css效果图',
        component: () => import('@/views/css-design'),
      },
      {
        path: 'visual',
        component: () => import('@/views/main-content'),
        children: [
          {
            path: '',
            redirect: 'line-graph'
          },
          {
            path: 'line-graph',
            name: '折线图',
            component: () => import('@/views/echarts/line-graph')
          },
          {
            path: 'bar-graph',
            name: '柱状图',
            component: () => import('@/views/echarts/bar-graph')
          },
          {
            path: 'pie-graph',
            name: '饼图',
            component: () => import('@/views/echarts/line-graph')
          },
          {
            path: 's-graph',
            name: '散点图',
            component: () => import('@/views/echarts/bar-graph')
          }
        ]
      }
      ]
  }
  ]
});

export default router