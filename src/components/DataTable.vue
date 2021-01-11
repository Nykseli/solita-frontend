<template>
  <div class="small">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="names">
      <v-data-table
        :headers="headers"
        :items="names"
        :items-per-page="30"
        class="elevation-1"
      ></v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { NameCount } from "@/types";
import { namesModule } from "@/store/namesModule";

@Component({})
export default class DataTable extends Vue {
  public headers = [
    {
      text: "Name",
      align: "start",
      value: "name"
    },
    { text: "Amount", value: "amount" }
  ];

  get loading(): boolean {
    return namesModule.loading;
  }

  get names(): Array<NameCount> {
    return namesModule.data.names;
  }

  created() {
    namesModule.getNameData();
  }
}
</script>

<style>
.small {
  max-width: 1200px;
  margin: 150px auto;
}
</style>
