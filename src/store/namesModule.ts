import { getData } from "@/utils/demo-api";
import store from "@/store";
import { NameData } from "@/types";
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";

export interface NamesState {
  data: NameData;
  loading: boolean;
}

// Make module dynamic so it can be automatically initialized when it's needed
@Module({ name: "namesModule", dynamic: true, store: store })
export class NamesModule extends VuexModule implements NamesState {
  public data = {} as NameData;
  public loading = true;

  @Action
  getNameData(): void {
    // We can rely on backend always working for now
    this.setLoading(true);
    getData().then(res => {
      this.setNameData(res);
      this.setLoading(false);
    });
  }

  @Mutation
  setNameData(data: NameData): void {
    this.data = data;
  }

  @Mutation
  setLoading(loading: boolean): void {
    this.loading = loading;
  }
}

export const namesModule = getModule(NamesModule);
