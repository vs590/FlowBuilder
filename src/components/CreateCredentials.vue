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
    <b-toast
      id="success"
      variant="success"
      no-close-button
      auto-hide-delay
    >Credentials Created Successfully</b-toast>
    <b-toast
      id="error"
      variant="warning"
      no-close-button
      auto-hide-delay
    >Credentials with this Username Already exists</b-toast>
  </div>
</template>

<script>
import { systems } from "../assets/data";

import { db } from "../config/db";
export default {
  data() {
    return {
      credentials: [],
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
          arr.push({ value: data.systemid, text: data.systemName });
          return arr;
        },
        [{ value: null, text: "Select any One" }]
      );
    }
  },
  created() {
    if (localStorage.getItem("isAuthenticated") == "true") {
      this.show = true;
      this.$rtdbBind("credentials", db.ref("credentials"));
      this.credentials = this.credentials.map(data => {
        return data.username;
      });
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
      this.form.system = this.systems.find(
        data => data.systemid == this.form.system
      ).systemName;
      if (!this.credentials.includes(this.form.username)) {
        db.ref("credentials").push(this.form);
        this.form = {
          username: "",
          password: "",
          email: "",
          name: "",
          company: "",
          system: null
        };
        this.$bvToast.show("success");
        if (document.getElementById("modal-1")) this.$bvModal.hide("modal-1");
      } else {
        this.$bvToast.show("error");
      }
    }
  }
};
</script>
