<template>
  <div>
    <p>Total names: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { backendModule } from "@/store/backendModule";

@Component
export default class NamesTotal extends Vue {
  get count(): number {
    return backendModule.totalCount;
  }

  created() {
    backendModule.getTotalCount();
  }
}
</script>
