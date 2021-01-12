<template>
  <div>
    <p>Total names: 211</p>
    <v-row>
      <v-btn elevation="2">Refresh</v-btn>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NamesTotal extends Vue {}
</script>
