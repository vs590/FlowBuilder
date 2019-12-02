<template>
  <b-modal id="modal-1" :title="gettitle" no-close-on-backdrop no-stacking hide-footer>
    <center>
      <h4>Automation Type: {{ getAutomationType }}</h4>
    </center>
    <b-card-group deck>
      <b-card v-if="!isEmptyOrNull(data.Source)" header="Source">
        <p>
          <strong>System:</strong>
          {{ data.Source.system }}
        </p>
        <p v-if="data.automationType == 0">
          <strong>Module:</strong>
          {{ data.Source.module }}
        </p>
        <p v-if="data.automationType == 1">
          <strong>Report:</strong>
          {{ data.Source.report }}
        </p>
        <p>
          <strong>Project:</strong>
          {{ data.Source.project }}
        </p>
        <p>
          <strong>Company:</strong>
          {{ data.Source.company }}
        </p>
        <p>
          <strong>URL:</strong>
          {{ data.Source.url }}
        </p>
        <p>
          <strong>Credential:</strong>
          {{ data.Source.credential }}
        </p>
      </b-card>
      <b-card v-if="!isEmptyOrNull(data.Target)" header="Target">
        <p>
          <strong>System:</strong>
          {{ data.Target.system }}
        </p>
        <p>
          <strong>Module:</strong>
          {{ data.Target.module }}
        </p>
        <p>
          <strong>Project:</strong>
          {{ data.Target.project }}
        </p>
        <p>
          <strong>Company:</strong>
          {{ data.Target.company }}
        </p>
        <p>
          <strong>URL:</strong>
          {{ data.Target.url }}
        </p>
        <p>
          <strong>Credential:</strong>
          {{ data.Target.credential }}
        </p>
      </b-card>
      <b-card v-if="!isEmptyOrNull(data.Briq)" header="Briq">
        <p>
          <strong>System:</strong>
          {{ data.Briq.system }}
        </p>
        <p>
          <strong>Report:</strong>
          {{ data.Briq.report }}
        </p>
        <p>
          <strong>Project:</strong>
          {{ data.Briq.project }}
        </p>
        <p>
          <strong>Company:</strong>
          {{ data.Briq.company }}
        </p>
        <p>
          <strong>URL:</strong>
          {{ data.Briq.url }}
        </p>
        <p>
          <strong>Credential:</strong>
          {{ data.Briq.credential }}
        </p>
      </b-card>
    </b-card-group>
  </b-modal>
</template>
<script>
export default {
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  computed: {
    gettitle() {
      return "Detail For ".concat(this.data.dateCreated);
    },
    getAutomationType() {
      return this.data.automationType == 0 ? "Connecting" : "Reporting";
    }
  },
  methods: {
    isEmptyOrNull(feild) {
      return feild == null || Object.keys(feild).length == 0;
    }
  }
};
</script>
