import { observable, computed } from "mobx";
import items from "../pages/items";

export class SearchStore {
  @observable
  searchTerm = "";

  @observable
  items = items;

  @computed
  get searchResults() {
    return this.items.filter(obj =>
      Object.values(obj).some(
        val => val.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1
      )
    );
  }
}
