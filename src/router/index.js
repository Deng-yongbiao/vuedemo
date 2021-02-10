import Vue from "vue"
import VueRouter from "vue-router"
// import { component } from "vue/types/umd"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import("../views/Main.vue"),
    // 由于是放在Main.vue里面的el-main里面，因此是子路由
    children: [
      //首页
      {
        path: "/",
        name: "home",
        component: () => import("../views/Home/home.vue")
      },
      {
        path: "/video",
        name: "video",
        component: () => import("../views/VideoManage/VideoManage.vue")
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/UserManage/UserManage.vue")
      },
      {
        path: "/page1",
        name: "page1",
        component: () => import("../views/Other/Page1.vue")
      },
      {
        path: "/page2",
        name: "page2",
        component: () => import("../views/Other/Page2.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
