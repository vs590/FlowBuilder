<template>
  <div>
    <center>
      <b-card
        class="mt-60"
        header="Login"
        style="max-width: 300px;margin-top: 150px;"
      >
        <b-alert :show="invalid" variant="danger">Invalid Credentials</b-alert>
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group
            id="input-group-1"
            class="ml-0"
            label="Username"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.username"
              type="text"
              required
              placeholder="Enter UserName"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Password" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Enter Password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
      </b-card>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      show: true,
      invalid: false
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.form.username == "testuser" && this.form.password == 1234) {
        localStorage.setItem("setupTime", new Date().getTime());
        localStorage.setItem("userName", this.form.username);
        localStorage.setItem("isAuthenticated", true);
        this.$router.push({
          name: "MyAutomations"
        });
        //window.location.reload();
      } else {
        localStorage.setItem("isAuthenticated", false);
        this.invalid = true;
      }
    }
  }
};
</script>
