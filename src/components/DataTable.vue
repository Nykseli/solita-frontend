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

@Component({})
export default class DataTable extends Vue {
  public loading = false;
  public headers = [
    {
      text: "Name",
      align: "start",
      value: "name"
    },
    { text: "Amount", value: "amount" }
  ];
  public names: Array<NameCount> = [
    {
      name: "Ville",
      amount: 24
    },
    {
      name: "Anna",
      amount: 6
    }
  ];
}
</script>

<style>
.small {
  max-width: 1200px;
  margin: 150px auto;
}
</style>
