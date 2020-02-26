import React from 'react'
import { SearchStore } from './searchStore'

export const storesContext = React.createContext({
  searchStore: new SearchStore(),
})