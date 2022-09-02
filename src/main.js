import { createApp } from "vue";

import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import "./index.css";

import BaseSpinner from "./components/ui/base/BaseSpinner.vue";

const app = createApp(App);

app.component("base-spinner", BaseSpinner);

app.use(store);
app.use(router);

app.mount("#app");
