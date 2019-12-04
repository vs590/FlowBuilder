<template>
  <div id="app">
    <nav v-if="isAuthenticated" class="navbar navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand">Hi {{ userName }}</a>

      <b-dropdown id="dropdown-right" right class="m-2">
        <router-link v-bind:to="{ name: 'MyAutomations' }" class="dropdown-item">Home</router-link>
        <router-link v-bind:to="{ name: 'Credentials' }" class="dropdown-item">Credentials</router-link>
        <router-link v-bind:to="{ name: 'FlowBuilder' }" class="dropdown-item">FlowBuilder</router-link>
        <b-dropdown-divider></b-dropdown-divider>
        <a @click="logoutUser()" class="dropdown-item" href="#">Logout</a>
      </b-dropdown>
    </nav>

    <router-view @updateStatus="updateStatus($event)" />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      isAuthenticated: false,
      userName: ""
    };
  },
  methods: {
    logoutUser() {
      localStorage.removeItem("userName");
      localStorage.setItem("isAuthenticated", false);
      this.isAuthenticated = false;
      this.username = "";
      this.$router.push({ name: "Login" });
    },
    updateStatus(data) {
      this.isAuthenticated = data.isAuthenticated;
      this.userName = data.userName;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
