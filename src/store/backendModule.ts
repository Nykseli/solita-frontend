import {
  getNamesTotal,
  getNameAmount,
  getNameAlphabeticalOrder,
  getNameAmountOrder
} from "@/utils/api";
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
  orderedAmount: NameData;
  amountLoading: boolean;
  orderedAlphabet: NameData;
  alphabetLoading: boolean;
  totalCount: number;
  nameAmount: number;
  loading: boolean;
}

// Make module dynamic so it can be automatically initialized when it's needed
@Module({ name: "backendModule", dynamic: true, store: store })
export class BackendModule extends VuexModule implements BackendState {
  public orderedAmount = {} as NameData;
  public orderedAlphabet = {} as NameData;
  public alphabetLoading = true;
  public amountLoading = true;
  public totalCount = 0;
  public nameAmount = 0;
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

  @Action
  getNameAmount(name: string): void {
    this.setLoading(true);
    getNameAmount(name).then(res => {
      this.setNameAmount(res["amount"]);
      this.setLoading(false);
    });
  }

  @Action
  getNameAlphabeticalOrder(): void {
    this.setAlphabetLoading(true);
    getNameAlphabeticalOrder().then(res => {
      this.setOrderedAlphabet(res);
      this.setAlphabetLoading(false);
    });
  }

  @Action
  getNameAmountOrder(): void {
    this.setAmountLoading(true);
    getNameAmountOrder().then(res => {
      this.setOrderedAmount(res);
      this.setAmountLoading(false);
    });
  }

  @Mutation
  setOrderedAmount(data: NameData) {
    this.orderedAmount = data;
  }

  @Mutation
  setOrderedAlphabet(data: NameData) {
    this.orderedAlphabet = data;
  }

  @Mutation
  setNameAmount(amount: number): void {
    this.nameAmount = amount;
  }

  @Mutation
  setAlphabetLoading(loading: boolean): void {
    this.alphabetLoading = loading;
  }

  @Mutation
  setAmountLoading(loading: boolean): void {
    this.amountLoading = loading;
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
