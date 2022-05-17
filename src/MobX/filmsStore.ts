import { makeAutoObservable } from "mobx"
import { filmAPI } from "../api/api"

export interface IFilm {
  countries: Array<{counties: string}>
  filmId: number
  filmLength: string
  genres: Array<{genre: string}>
  nameEn: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  rating: string
  ratingVoteCount: number
  year: string
}

interface IBestFilms {
  pageCount?: number,
  films?: Array<IFilm>
}

class FilmsStore {
  bestFilms: IBestFilms = {}

  constructor() {
    makeAutoObservable(this)
  }

  setBestFilms(bestFilms: IBestFilms) {
    this.bestFilms = bestFilms
  }

  async getBestFilms(currentPage: number) {
    const bestFilms = await filmAPI.getBestFilms(currentPage)
    this.bestFilms = bestFilms
  }

}

export default FilmsStore;