import { observable, action } from "mobx";
import items from "../pages/items";

export class SearchStore {
  @observable
  searchTerm = "react";

  @action
  changeSearchTerm(newTerm) {
    this.searchTerm = newTerm;
  }

  @action
  search(term) {
    return items.filter(obj =>
      Object.values(obj).some(
        val => val.toLowerCase().indexOf(term.toLowerCase()) !== -1
      )
    );
  }
}
