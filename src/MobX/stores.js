import { createContext, useContext } from "react"
import FilmsStore from "./filmsStore"

class RootStore {
  constructor() {
    this.filmsStore = new FilmsStore
  }
}

const StoresContext = createContext(new RootStore())

export const useStores = () => useContext(StoresContext)