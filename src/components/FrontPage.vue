<template>
  <div class="front-page">
    <h1>Welcome to the Solita dev academy demo application</h1>
    <p>
      This site contains a page for inspecting the name data with a simple table
      view.
      <br />
      And a page for testing the rest api.
    </p>
    <v-container>
      <v-row class="mb-6">
        <v-col>
          <h3>Frontend techologies</h3>
          <ul>
            <li>
              <a href="https://vuejs.org/" target="_blank" rel="noopener">
                Vue.js
              </a>
            </li>
            <li>
              <a
                href="https://vuetifyjs.com/en/"
                target="_blank"
                rel="noopener"
              >
                Vuetify
              </a>
            </li>
            <li>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener"
              >
                Typescript
              </a>
            </li>
          </ul>
        </v-col>
        <v-col>
          <h3>Backend techologies</h3>
          <ul>
            <li>
              <a href="https://golang.org/" target="_blank" rel="noopener">
                golang
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gorilla/mux"
                target="_blank"
                rel="noopener"
              >
                gorilla/mux
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FrontPage extends Vue {}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
