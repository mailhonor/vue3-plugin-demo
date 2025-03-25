
import { createApp } from "vue"
import vue3PluginDemo from "./vue3-plugin-demo/plugin"
import APP from "./app.vue"

const app = createApp(APP)
app.use(vue3PluginDemo)
app.mount("#app");