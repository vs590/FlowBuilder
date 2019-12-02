<template>
  <div>
    <h2 class="mt-2 mb-2">My Automations</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Automation Type</th>
          <th scope="col">Details</th>
          <th scope="col">Date Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in getAutomations" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ data.automationType }}</td>
          <td>
            <b-button
              type="button"
              v-b-modal.modal-1
              @click="showDetail(data.automationID)"
              variant="primary"
            >View Detail</b-button>
          </td>
          <td>{{ data.dateCreated }}</td>
        </tr>
      </tbody>
    </table>
    <ShowDetails :data="selectedData"></ShowDetails>
  </div>
</template>
<script>
import { detailData } from "../assets/data";
import ShowDetails from "./ShowDetails";
export default {
  data() {
    return {
      detailData: detailData,
      show: false,
      selectedData: {}
    };
  },
  computed: {
    getAutomations() {
      return this.detailData.reduce((arr, obj) => {
        arr.push({
          automationType: obj.automationType == 0 ? "Connecting" : "Reporting",
          dateCreated: obj.dateCreated,
          automationID: obj.automationID
        });
        return arr;
      }, []);
    }
  },
  methods: {
    showDetail(id) {
      this.selectedData = this.detailData.find(data => data.automationID == id);
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
  components: {
    ShowDetails
  }
};
</script>
