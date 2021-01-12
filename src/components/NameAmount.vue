<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        label="Name"
        v-model="input.name"
        hide-details="auto"
      ></v-text-field>
    </v-col>
    <v-col v-if="amount" cols="12">
      <p>Amount: {{ amount }}</p>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-btn elevation="2" @click="searchName">Search</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { backendModule } from "@/store/backendModule";

@Component
export default class NameAmount extends Vue {
  public input = {
    name: ""
  };

  searchName() {
    if (this.input.name.length > 0) {
      backendModule.getNameAmount(this.input.name);
    }
  }

  get amount(): number {
    return backendModule.nameAmount;
  }
}
</script>
