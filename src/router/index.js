import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/HomePage.vue";
import About from "../components/AboutPage.vue";
import Person from "../components/PersonPage.vue";

// 1. 定义路由组件.

// 2. 定义一些路由
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/person",
    /* access component of the child route 
    will also display component of the parent route */
    component: Person,
    redirect: "/ysama",
    // redirect: "/person/ysama",
    children: [
      {
        // wrong syntax, but works
        path: "/ysama",
        component: () => import("../components/persons/Person-01.vue"),
      },
      {
        // right syntax
        // also /ysama/kikukaji
        path: "kikukaji",
        component: () => import("../components/persons/Person-02.vue"),
      },
    ],
  },
];

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export { router };
