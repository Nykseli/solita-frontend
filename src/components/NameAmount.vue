<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        label="Name"
        v-model="input.name"
        hide-details="auto"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <p>Amount: 12</p>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-btn elevation="2">Refresh</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NameAmount extends Vue {
  public input = {
    name: ""
  };
}
</script>
