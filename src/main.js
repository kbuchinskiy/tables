import Vue from "vue";
import App from "./App.vue";
import "@/assets/style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTrash, faCopy, faStop } from "@fortawesome/free-solid-svg-icons";
import router from "./router";
library.add(faTrash, faCopy, faStop);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
