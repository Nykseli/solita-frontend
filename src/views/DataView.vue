<template>
  <div class="data-view">
    <div class="instructions">
      <p>Order items by clicking "Name" or "Amount"</p>
    </div>
    <DataTable />
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
