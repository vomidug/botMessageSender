import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  vuetify,

  render: function(h) {
    return h(App);
  }
}).$mount("#app");
