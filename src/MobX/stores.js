import { createContext, useContext } from "react"
import BookmarksStore from "./bookmarksStore"
import FilmsStore from "./filmsStore"
import MovieStore from "./movieStore"

class RootStore {
  constructor() {
    this.filmsStore = new FilmsStore
    this.movieStore = new MovieStore
    this.bookmarksStore = new BookmarksStore
  }
}

const StoresContext = createContext(new RootStore())

export const useStores = () => useContext(StoresContext)