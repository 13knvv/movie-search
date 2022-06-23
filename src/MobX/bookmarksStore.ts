import { makeAutoObservable, runInAction } from "mobx"
import { bookmarksAPI, filmAPI } from "../api/api"

export interface IBookmarkFilm {
  filmId: number
  genres: Array<{genre: string}>
  nameRu: string
  posterUrlPreview: string
  rating: number
  year: number
}

class BookmarksStore {
  filmsOfBookmarks: Array<IBookmarkFilm> = []

  constructor() {
    makeAutoObservable(this)
  }

  getBookmarksFilms = () => {
    const bookmarks = bookmarksAPI.getBookmarks()
    if (bookmarks) {
      this.filmsOfBookmarks = bookmarks
    }
     
  }

  deleteAllBookmarks = () => {
    bookmarksAPI.clearBookmarks()
    this.getBookmarksFilms()
  }

   setBookmarkFilm = async (filmId: number) => {
    const movie = await filmAPI.getMovie(filmId)
    runInAction ( () => {
      this.filmsOfBookmarks.push({
        filmId: movie.kinopoiskId,
        genres: movie.genres,
        nameRu: movie.nameRu,
        posterUrlPreview: movie.posterUrlPreview,
        rating: movie.ratingKinopoisk,
        year: movie.year,
      })
    })
    bookmarksAPI.setBookmarks(this.filmsOfBookmarks)
  }

  deleteBookmarkFilm = (filmId: number) => {
    const index = this.filmsOfBookmarks.findIndex(film => {
        if (film.filmId === filmId) {
          return true
        }
      })
    this.filmsOfBookmarks.splice(index, 1)
    bookmarksAPI.setBookmarks(this.filmsOfBookmarks)
  }

  getDoesFilmHaveBookmark = (filmId: number) => {
    return this.filmsOfBookmarks?.find(film => {
      if (film.filmId === filmId) {
        return true
      }
    })
  }

}

export default BookmarksStore;