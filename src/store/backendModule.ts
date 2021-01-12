import { getNamesTotal } from "@/utils/api";
import store from "@/store";
import { NameData } from "@/types";
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";

export interface BackendState {
  orderedCount: NameData;
  orderedAlphabeth: NameData;
  totalCount: number;
  perNameCount: number;
  loading: boolean;
}

// Make module dynamic so it can be automatically initialized when it's needed
@Module({ name: "backendModule", dynamic: true, store: store })
export class BackendModule extends VuexModule implements BackendState {
  public orderedCount = {} as NameData;
  public orderedAlphabeth = {} as NameData;
  public totalCount = 0;
  public perNameCount = 0;
  public loading = true;

  @Action
  getTotalCount(): void {
    // We can rely on backend always working for now
    this.setLoading(true);
    getNamesTotal().then(res => {
      this.setTotalCount(res["total"]);
      this.setLoading(false);
    });
  }

  @Mutation
  setLoading(loading: boolean): void {
    this.loading = loading;
  }

  @Mutation
  setTotalCount(count: number): void {
    this.totalCount = count;
  }
}

export const backendModule = getModule(BackendModule);
