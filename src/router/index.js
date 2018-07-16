import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

const router = new Router({
  // mode: 'history',
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
        children: [
          {
            path: '',
            redirect: 'bar-graph'
          },
          {
            path: 'bar-graph',
            name: '柱状图',
            component: () => import('@/views/echarts/bar-graph')
          }
        ]
      },
      {
        path: 'book-exhibition',
        name: '书籍展示',
        component: () => import('@/views/book-exhibition'),
        children: [
          {
            path: '',
            // name: '书籍',
            redirect: 'index'
          },
          {
            path: 'index',
            name: '书籍',
            component: () => import('@/views/book/index'),
          },
          {
            path: 'book',
            name: '书籍',
            component: () => import('@/views/book/book')
          },
          {
            path: 'movie',
            name: '电影',
            component: () => import('@/views/book/movie')
          }
        ]
      },
      {
            path: 'book',
            name: '书籍',
            component: () => import('@/views/book/book')
          },
      {
        path: 'settings',
        name: '配置中心',
        component: () => import('@/views/settings'),

      },
      {
        path: 'webpack-settings',
        name: 'webpack配置',
        component: () => import('@/views/webpack-settings'),
      },
      {
        path: 'about',
        name: '关于',
        component: () => import('@/views/about'),
      },
      {
        path: 'visual',
        component: () => import('@/views/echarts'),
        children: [
          {
            path: '',
            redirect: 'line-graph'
          },
          {
            path: 'line-graph',
            name: '折线图',
            meta: {
              requireAuth: true
            },
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
  ],
   scrollBehavior(to, from, savedPosition) {
          console.log(savedPosition)
          if(savedPosition) {
            return savedPosition
          }
          else {
             const position = {}
              // new navigation.
              // scroll to anchor by returning the selector
              if (to.hash) {
                position.selector = to.hash
              }
              return position
          }
        }
});

// 路由的前置守卫
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) { // 判断是否需要权限
    if(sessionStorage.username) {
      next()
    }
    else { // 跳转到登录页面
      next({
        path: '/login'
      })
    }
  }
  else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  console.log("update"+to)
  next()
})

router.afterEach((to, from) => {
  console.log("after")
})

// router.beforeRouteEnter ((to, from, next) => {
//   console.log("beforeRouter");
//   next()
// })
// router.beforeRouteUpdate((to, from, next) => {
//   console.log("beforeRouteUpdate");
//   next()
// })
// router.beforeRouteLeave((to, from, next) => {
//   console.log("beforeRouteLeave");
//   next()
// })

export default router