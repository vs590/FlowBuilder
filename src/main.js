import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

var hours = 1; // session expiry: 1hours
var now = new Date().getTime();
var setupTime = localStorage.getItem("setupTime");
if (
  localStorage.getItem("isAuthenticated") &&
  now - setupTime > hours * 60 * 60 * 1000
) {
  localStorage.clear();
}
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
