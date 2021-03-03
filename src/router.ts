import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDoc from "./components/SwitchDoc.vue";
import ButtonDoc from "./components/ButtonDoc.vue";
import DialogDoc from "./components/DialogDoc.vue";
import TabsDoc from "./components/TabsDoc.vue";
import Markdown from "./components/Markdown.vue"
import{h} from 'vue'
const renderMd = filename => h(Markdown,{path:`../markdown/${filename}.md`,key:filename})
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
        { path: "intro", component: renderMd('intro') },
        { path: "install", component: renderMd('install') },
        { path: "get-started", component: renderMd('getStarted') },
        { path: "switch", component: SwitchDoc },
        { path: "button", component: ButtonDoc },
        { path: "dialog", component: DialogDoc },
        { path: "tabs", component: TabsDoc },
      ],
    },
  ],
});
export default router;
