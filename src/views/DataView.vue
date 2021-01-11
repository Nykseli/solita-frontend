<template>
  <div class="data-view">
    <DataTable msg="Welcome to the data table :hypers" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DataTable from "@/components/DataTable.vue"; // @ is an alias to /src

@Component({
  components: {
    DataTable
  }
})
export default class DataView extends Vue {}
</script>
