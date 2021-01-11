<template>
  <div class="small">
    <v-card>
      <v-card-title>
        Name data
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="names"
        :items-per-page="10"
        class="elevation-1"
        :loading="loading"
        loading-text="Loading..."
        :search="search"
        dense="true"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { NameCount } from "@/types";
import { namesModule } from "@/store/namesModule";

@Component({})
export default class DataTable extends Vue {
  public search = "";
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
  /*  margin: 150px auto; */
}
</style>
