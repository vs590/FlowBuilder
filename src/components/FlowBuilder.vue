<template>
  <div v-if="show">
    <center>
      <h4>Select Automation Type</h4>
      <b-button
        squared
        variant="info"
        size="lg"
        class="mr-5"
        @click="selectedAutomationType = 0"
      >Connector</b-button>
      <b-button squared variant="info" size="lg" @click="selectedAutomationType = 1">Reporting</b-button>
    </center>
    <b-card v-if="selectedAutomationType == 0 || selectedAutomationType == 1" class="mt-3">
      <form-wizard
        color="#3498db"
        ref="wizard"
        title="Build Your Automation Flow"
        subtitle
        @on-complete="submitForm"
      >
        <b-alert :show="invalid" variant="danger">You missed Something</b-alert>
        <tab-content title="Source" :before-change="prepareFinalObject">
          <b-form-group id="input-group-1" label="System" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="finalObj.Source.system"
              :options="getSystems"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Module"
            label-for="input-2"
            v-show="selectedAutomationType == 0"
          >
            <b-form-select
              id="input-2"
              v-model="finalObj.Source.module"
              :options="getmodules('Source')"
              required
              :disabled="
                finalObj.Source.system == '' || finalObj.Source.system == null
              "
            ></b-form-select>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Reports"
            label-for="input-2"
            v-show="selectedAutomationType == 1"
          >
            <b-form-select
              id="input-2"
              v-model="finalObj.Source.report"
              :options="getreports('Source')"
              :disabled="
                finalObj.Source.system == '' || finalObj.Source.system == null
              "
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group id="input-group-3" label="Project" label-for="input-3">
            <b-form-input
              id="input-2"
              v-model="finalObj.Source.project"
              type="text"
              required
              placeholder="Enter Project Name"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Company" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="finalObj.Source.company"
              type="text"
              required
              placeholder="Enter company name"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="URL" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="finalObj.Source.url"
              type="url"
              required
              placeholder="Enter URL"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Credentials" label-for="input-6">
            <b-form-select
              id="input-6"
              v-model="finalObj.Source.credential"
              :options="getcredentials"
              required
            ></b-form-select>
          </b-form-group>
          <b-button v-b-modal.modal-1>+ Add Credential</b-button>
        </tab-content>
        <tab-content
          title="Target"
          v-if="selectedAutomationType == 0"
          :before-change="prepareFinalObject"
        >
          <b-form-group id="input-group-1" label="System" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="finalObj.Target.system"
              :options="getSystems"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Module"
            label-for="input-2"
            v-show="selectedAutomationType == 0"
          >
            <b-form-select
              id="input-2"
              v-model="finalObj.Target.module"
              :options="getmodules('Target')"
              required
              :disabled="
                finalObj.Target.system == '' || finalObj.Target.system == null
              "
            ></b-form-select>
          </b-form-group>
          <b-form-group id="input-group-3" label="Project" label-for="input-3">
            <b-form-input
              id="input-2"
              v-model="finalObj.Target.project"
              type="text"
              required
              placeholder="Enter Project Name"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Company" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="finalObj.Target.company"
              type="text"
              required
              placeholder="Enter company name"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="URL" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="finalObj.Target.url"
              type="url"
              required
              placeholder="Enter URL"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Credentials" label-for="input-6">
            <b-form-select
              id="input-6"
              v-model="finalObj.Target.credential"
              :options="getcredentials"
              required
            ></b-form-select>
          </b-form-group>
          <b-button v-b-modal.modal-1>+ Add Credential</b-button>
        </tab-content>
        <tab-content
          v-if="selectedAutomationType == 1"
          title="Briq"
          :before-change="prepareFinalObject"
        >
          <b-form-group id="input-group-1" label="System" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="finalObj.Briq.system"
              :options="getSystems"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Reports"
            label-for="input-2"
            v-show="selectedAutomationType == 1"
          >
            <b-form-select
              id="input-2"
              v-model="finalObj.Briq.report"
              :options="getreports('Briq')"
              :disabled="
                finalObj.Briq.system == '' || finalObj.Briq.system == null
              "
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group id="input-group-3" label="Project" label-for="input-3">
            <b-form-input
              id="input-2"
              v-model="finalObj.Briq.project"
              type="text"
              required
              placeholder="Enter Project Name"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Company" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="finalObj.Briq.company"
              type="text"
              required
              placeholder="Enter company name"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="URL" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="finalObj.Briq.url"
              type="url"
              required
              placeholder="Enter URL"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Credentials" label-for="input-6">
            <b-form-select
              id="input-6"
              v-model="finalObj.Briq.credential"
              :options="getcredentials"
              required
            ></b-form-select>
          </b-form-group>
          <b-button v-b-modal.modal-1>+ Add Credential</b-button>
        </tab-content>
      </form-wizard>
      <b-modal id="modal-1" no-close-on-backdrop no-stacking hide-footer>
        <CreateCredentials></CreateCredentials>
      </b-modal>
    </b-card>
  </div>
</template>

<script src="https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.js"></script>
<script>
import { systems, reports, modules, credentials } from "../assets/data";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { FormWizard, TabContent } from "vue-form-wizard";
import CreateCredentials from "./CreateCredentials";
export default {
  data() {
    return {
      systems: systems,
      reports: reports,
      modules: modules,
      credentials: credentials,
      selectedAutomationType: null,
      finalObj: {
        automationType: this.selectedAutomationType,
        Source: {
          system: null,
          module: null,
          report: null,
          project: "",
          company: "",
          url: "",
          credential: null
        },
        Target: {
          system: null,
          module: null,
          report: null,
          project: "",
          company: "",
          url: "",
          credential: null
        },
        Briq: {
          system: null,
          module: null,
          report: null,
          project: "",
          company: "",
          url: "",
          credential: null
        }
      },
      show: false,
      invalid: false
    };
  },
  computed: {
    getcredentials() {
      return this.credentials.reduce(
        (arr, data) => {
          arr.push({ value: data.id, text: data.username });
          return arr;
        },
        [{ value: null, text: "Select any One" }]
      );
    },
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
  methods: {
    getmodules(name) {
      return this.modules.reduce(
        (arr, data) => {
          if (data.systemid == this.finalObj[name].system)
            arr.push({ value: data.moduleID, text: data.modulename });
          return arr;
        },
        [{ value: null, text: "Select any One" }]
      );
    },
    getreports(name) {
      return this.reports.reduce(
        (arr, data) => {
          if (data.systemid == this.finalObj[name].system)
            arr.push({ value: data.reportID, text: data.reportname });
          return arr;
        },
        [{ value: null, text: "Select any One" }]
      );
    },
    prepareFinalObject: function() {
      var valid = false;
      if (this.$refs.wizard.activeTabIndex == 0) {
        valid = this.allFeildsValid(this.finalObj.Source);
      } else {
        valid =
          this.selectedAutomationType == 0
            ? this.allFeildsValid(this.finalObj.Target)
            : this.allFeildsValid(this.finalObj.Briq);
      }
      this.invalid = !valid;
      return valid;
    },
    submitForm() {
      alert(JSON.stringify(this.finalObj));
      this.$router.push({ name: "MyAutomations" });
    },
    allFeildsValid(data) {
      window.scrollTo(0, 0);
      if (
        (this.isEmptyOrNull(data.module) && this.isEmptyOrNull(data.report)) ||
        this.isEmptyOrNull(data.system) ||
        this.isEmptyOrNull(data.project) ||
        this.isEmptyOrNull(data.company) ||
        this.isEmptyOrNull(data.url) ||
        this.isEmptyOrNull(data.credential)
      ) {
        return false;
      } else {
        return true;
      }
    },
    isEmptyOrNull(feild) {
      return feild == "" || feild == null;
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
    FormWizard,
    TabContent,
    CreateCredentials
  }
};
</script>
