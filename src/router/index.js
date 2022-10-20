import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/HomePage.vue";
import About from "../components/AboutPage.vue";

// 1. 定义路由组件.

// 2. 定义一些路由
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export { router };
