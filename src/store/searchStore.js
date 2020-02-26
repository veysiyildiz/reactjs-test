import { observable, action, computed } from 'mobx'

export class SearchStore {
  @observable
  searchTerm = 'react'

  @action
  increment() {
    this.count++
  }

  @action
  decrement() {
    this.count--
  }

  @computed
  get doubleCount() {
    return this.count * 2
  }
}