<template>
  <div>
    <CreateCredentials></CreateCredentials>
    <b-card class="mt-3" header="CREDENTIALS">
      <b-card-group deck>
        <b-card
          class="cards-width"
          v-for="(data, index) in credentials"
          :key="index"
          header-text-variant="white"
          align="center"
        >
          <b-card-text style="text-align:left !important">
            <div>
              <p>
                <strong>Username:</strong>
                {{ data.username }}
              </p>
              <p>
                <strong>Email:</strong>
                {{ data.email }}
              </p>
              <p>
                <strong>Company:</strong>
                {{ data.company }}
              </p>
              <p>
                <strong>System:</strong>
                {{ data.system }}
              </p>
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
import { db } from "../config/db";
export default {
  data() {
    return {
      credentials: [],
      show: false
    };
  },
  created() {
    if (localStorage.getItem("isAuthenticated") == "true") {
      this.$rtdbBind("credentials", db.ref("credentials"));
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
<style scoped>
.cards-width {
  min-width: fit-content;
  margin-top: 10px;
}
</style>