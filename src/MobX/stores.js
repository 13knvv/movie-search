import { createContext, useContext } from "react"
import FilmsStore from "./filmsStore"
import MovieStore from "./movieStore"

class RootStore {
  constructor() {
    this.filmsStore = new FilmsStore
    this.movieStore = new MovieStore
  }
}

const StoresContext = createContext(new RootStore())

export const useStores = () => useContext(StoresContext)