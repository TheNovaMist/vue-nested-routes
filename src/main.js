import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// router
import { router } from "./router/index";

createApp(App).use(ElementPlus).use(router).mount("#app");
