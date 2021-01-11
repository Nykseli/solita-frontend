import Vue from "vue";
import Vuex from "vuex";

import { NamesModule } from "./namesModule";

Vue.use(Vuex);

interface RootState {
  nameState: NamesModule;
}

export default new Vuex.Store<RootState>({});
