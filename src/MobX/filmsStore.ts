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
  rating: number
  ratingVoteCount: number
  year: string
}

interface IListFilms {
  pagesCount?: number
  films?: Array<IFilm>
}

class FilmsStore {
  bestFilms: IListFilms = {}
  bestFilmsCurrentPage: number = 1
  
  popularFilms: IListFilms = {}
  popularFilmsCurrentPage: number = 1

  constructor() {
    makeAutoObservable(this)
  }

  setBestFilmsCurrentPage(currentPage: number) {
    this.bestFilmsCurrentPage = currentPage
  }

  setBestFilms(bestFilms: IListFilms) {
    this.bestFilms = bestFilms
  }

  async getBestFilms(currentPage: number) {
    const bestFilms = await filmAPI.getBestFilms(currentPage)
    this.setBestFilms(bestFilms)
    this.setBestFilmsCurrentPage(currentPage)
  }

  setPopularFilmsCurrentPage(currentPage: number) {
    this.popularFilmsCurrentPage = currentPage
  }

  setPopularFilms(popularFilms: IListFilms) {
    this.popularFilms = popularFilms
  }

  async getPopularFilms(currentPage: number) {
    const popularFilms = await filmAPI.getPopularFilms(currentPage)
    this.setPopularFilms(popularFilms)
    this.setPopularFilmsCurrentPage(currentPage)
  }

}

export default FilmsStore;