<template>
  <div class="api-view">
    <v-expansion-panels multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Names total</v-expansion-panel-header>
        <v-expansion-panel-content>
          <NamesTotal />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Ordered by name amount
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <DataTable :loading="amountLoading" :nameData="amountData" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          In alphabetical order
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <DataTable :loading="alphabetLoading" :nameData="alphabetData" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Per name amount</v-expansion-panel-header>
        <v-expansion-panel-content>
          <NameAmount />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DataTable from "@/components/DataTable.vue";
import NameAmount from "@/components/NameAmount.vue";
import NamesTotal from "@/components/NamesTotal.vue";
import { backendModule } from "@/store/backendModule";
import { NameData } from "@/types";

@Component({
  components: {
    DataTable,
    NameAmount,
    NamesTotal
  }
})
export default class ApiView extends Vue {
  get amountLoading(): boolean {
    return backendModule.amountLoading;
  }

  get amountData(): NameData {
    return backendModule.orderedAmount;
  }

  get alphabetLoading(): boolean {
    return backendModule.alphabetLoading;
  }

  get alphabetData(): NameData {
    return backendModule.orderedAlphabet;
  }

  created() {
    backendModule.getNameAmountOrder();
    backendModule.getNameAlphabeticalOrder();
  }
}
</script>

<style scoped>
.api-view {
  width: 80%;
}
</style>
