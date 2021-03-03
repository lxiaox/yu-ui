import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDoc from "./components/SwitchDoc.vue";
import ButtonDoc from "./components/ButtonDoc.vue";
import DialogDoc from "./components/DialogDoc.vue";
import TabsDoc from "./components/TabsDoc.vue";
import Markdown from "./components/Markdown.vue"
import{h} from 'vue'
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: "/doc/intro" },
        { path: "intro", component: h(Markdown,{path:'../markdown/intro.md',key:'intro'}) },
        { path: "install", component: h(Markdown,{path:'../markdown/install.md',key:'install'}) },
        { path: "get-started", component: h(Markdown,{path:'../markdown/getStarted.md',key:'getStarted'}) },
        { path: "switch", component: SwitchDoc },
        { path: "button", component: ButtonDoc },
        { path: "dialog", component: DialogDoc },
        { path: "tabs", component: TabsDoc },
      ],
    },
  ],
});
export default router;
