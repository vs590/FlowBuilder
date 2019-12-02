<template>
  <div>
    <b-card class="mt-3" header="Create Credential">
      <b-form @submit="createCredential" v-if="show">
        <b-form-group id="input-group-1" label="Username" label-for="input-1">
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

        <b-form-group id="input-group-3" label="Email address" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Company" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.company"
            type="text"
            required
            placeholder="Enter company name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Full Name" label-for="input-5">
          <b-form-input id="input-5" v-model="form.name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="System" label-for="input-6">
          <b-form-select id="input-6" v-model="form.system" :options="getSystems" required></b-form-select>
        </b-form-group>
        <b-button type="submit" variant="primary">Create Credentials</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { systems } from "../assets/data";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        email: "",
        name: "",
        company: "",
        system: null
      },
      systems: systems,
      show: false
    };
  },
  computed: {
    getSystems() {
      return this.systems.reduce(
        (arr, data) => {
          arr.push({ value: data.systemid, text: data.sytemName });
          return arr;
        },
        [{ value: null, text: "Select any One" }]
      );
    }
  },
  created() {
    if (localStorage.getItem("isAuthenticated") == "true") {
      this.show = true;
      this.$emit("updateStatus", {
        isAuthenticated: true,
        userName: localStorage.getItem("userName")
      });
    } else {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    createCredential(evt) {
      evt.preventDefault();
      //create credentials
      alert(JSON.stringify(this.form));
      if (document.getElementById("modal-1")) this.$bvModal.hide("modal-1");
    }
  }
};
</script>
