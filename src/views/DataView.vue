<template>
  <div class="data-view">
    <div class="instructions">
      <p>Order items by clicking "Name" or "Amount"</p>
    </div>
    <DataTable :loading="loading" :nameData="names" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DataTable from "@/components/DataTable.vue"; // @ is an alias to /src
import { namesModule } from "@/store/namesModule";
import { NameData } from "@/types";

@Component({
  components: {
    DataTable
  }
})
export default class DataView extends Vue {
  get loading(): boolean {
    return namesModule.loading;
  }

  get names(): NameData {
    return namesModule.data;
  }

  created() {
    namesModule.getNameData();
  }
}
</script>
