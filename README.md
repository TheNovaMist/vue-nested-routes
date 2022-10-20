# Note

组件的写法：

- `<RouterView>`
- `<router-view>`

访问不同网址改变的是 `<RouterView>` 的显示，根组件中嵌套的组件会一直显示（可以看作是 layout）。

访问子路由的组件也会显示父路由的组件。

- 正常情况下子路由有两种写法：
  - 相对路径，没有 `/` 会自动拼接
  - 绝对路径，需要包含父路径
- 🟡可以在子路由的绝对路径中不包含父路径，网页地址不是嵌套的形式，但仍旧显示父路由的组件内容

```js
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
```
