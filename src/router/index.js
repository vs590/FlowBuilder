import Vue from "vue";
import Router from "vue-router";
import Credentials from "@/components/Credentials";
import FlowBuilder from "@/components/FlowBuilder";
import Login from "@/components/Login";
import MyAutomations from "@/components/MyAutomations";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/credential",
      name: "Credentials",
      component: Credentials
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/FlowBuilder",
      name: "FlowBuilder",
      component: FlowBuilder
    },
    {
      path: "/MyAutomations",
      name: "MyAutomations",
      component: MyAutomations
    }
  ]
});
