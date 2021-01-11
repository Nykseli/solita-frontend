<template>
  <div class="home">
    <FrontPage />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FrontPage from "@/components/FrontPage.vue"; // @ is an alias to /src

@Component({
  components: {
    FrontPage
  }
})
export default class Home extends Vue {}
</script>
