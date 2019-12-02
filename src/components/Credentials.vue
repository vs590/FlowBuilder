<template>
  <div>
    <CreateCredentials></CreateCredentials>
    <b-card class="mt-3" header="CREDENTIALS">
      <b-card-group deck>
        <b-card
          v-for="(data, index) in credentials"
          :key="index"
          header-text-variant="white"
          align="center"
          style="max-width: 15rem;"
        >
          <b-card-text>
            <div>
              <p><strong>Username:</strong> {{ data.username }}</p>
              <p><strong>Email:</strong> {{ data.email }}</p>
              <p><strong>Company:</strong> {{ data.company }}</p>
              <p><strong>System:</strong> {{ data.system }}</p>
            </div>
          </b-card-text>
        </b-card>
        <!-- </span> -->
      </b-card-group>
    </b-card>
  </div>
</template>
<script>
import CreateCredentials from "./CreateCredentials";
import { credentials } from "../assets/data";
export default {
  data() {
    return {
      credentials: credentials,
      show: false
    };
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
  components: {
    CreateCredentials
  }
};
</script>
