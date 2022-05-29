import { makeAutoObservable } from "mobx"
import { filmAPI } from "../api/api"

export interface IMovie {
  completed?: boolean
  countries?: Array<any>
  coverUrl?: string
  description?: string
  editorAnnotation?: null
  endYear?: null
  filmLength?: number
  genres?: Array<any>
  has3D?: boolean
  hasImax?: boolean
  imdbId?: string
  isTicketsAvailable?: boolean
  kinopoiskId?: number
  lastSync?: string
  logoUrl?: string
  nameEn?: null | string
  nameOriginal?: string
  nameRu?: string
  posterUrl?: string
  posterUrlPreview?: string
  productionStatus?: null
  ratingAgeLimits?: string
  ratingAwait?: null
  ratingAwaitCount?: number
  ratingFilmCritics?: number
  ratingFilmCriticsVoteCount?: number
  ratingGoodReview?: number
  ratingGoodReviewVoteCount?: number
  ratingImdb?: number
  ratingImdbVoteCount?: number
  ratingKinopoisk?: number
  ratingKinopoiskVoteCount?: number
  ratingMpaa?: string
  ratingRfCritics?: null
  ratingRfCriticsVoteCount?: number
  reviewsCount?: number
  serial?: boolean
  shortDescription?: string
  shortFilm?: boolean
  slogan?: string
  startYear?: null
  type?: string
  webUrl?: string
  year?: number
}


class MovieStore {
  movie: IMovie = {}

  constructor() {
    makeAutoObservable(this)
  }

  setMovie(movie: IMovie) {
    this.movie = movie
  }

  async getMovie(filmId: string ) {
    const movie = await filmAPI.getMovie(filmId)
    this.setMovie(movie)
  }

}

export default MovieStore;