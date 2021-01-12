import Vue from "vue";
import Vuex from "vuex";

import { NamesModule } from "./namesModule";
import { BackendModule } from "./backendModule";

Vue.use(Vuex);

interface RootState {
  nameState: NamesModule;
  backendState: BackendModule;
}

export default new Vuex.Store<RootState>({});
