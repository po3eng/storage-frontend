import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vButton from "./controls/v-button.vue";
Vue.component("v-button", vButton);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
