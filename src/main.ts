import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import My from './components/My.vue'
import My2 from './components/My2.vue'
const history = createWebHashHistory();
const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {    path:'/my',component:My  },
    {    path:'/my2',component:My2  },
  ],
});

const app = createApp(App)
app.use(router)
app.mount("#app")
