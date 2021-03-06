import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // 首页
    redirect: "/policehandling"
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/policehandling",
    name: "policehandling",
    // 警情处理
    component: () =>
      import("../components/policehandling/policehandling.vue")
  },
  {
    path: "/personalaffairs",
    name: "personalaffairs",
    // 个人中心
    component: () =>
      import("../components/personalaffairs/personalaffairs.vue")
  },
  {
    path: "/specialcase",
    name: "specialcase",
    // 特勤保障
    component: () =>
      import("../components/specialcase/specialcase.vue")
  },
  {
    path: "/suddenAccident",
    name: "suddenAccident",
    // 突发上报
    component: () =>
      import("../components/suddenAccident/suddenAccident.vue")
  },
  {
    path: "/basicmatters",
    name: "basicmatters",
    // 基层基础
    component: () =>
      import("../components/basicmatters/basicmatters.vue")
  },
  {
    path: "/disposestory",
    name: "disposestory",
    // 工单处理
    component: () =>
      import("../components/disposestory/disposestory.vue")
  },
  {
    path: "/PublicProcessing",
    name: "PublicProcessing",
    // 公共处理弹出层
    component: () =>
      import("../components/PublicProcessing/PublicProcessing.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
