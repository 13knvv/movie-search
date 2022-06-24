import axios from "axios";

const axiosBase = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech',
    headers: { 'X-API-KEY': '9da5e9d0-bb84-42d2-8ee3-47aec39d2a6a',
               'Content-Type': 'application/json', }
})

export const filmAPI = {
    
    getMovie(filmId) {
        return axiosBase.get(`/api/v2.2/films/${filmId}`)
                  .then(response => {
                    console.log(response.data);
                    return response.data
                    }
                  )
    },

    getBestFilms(currentPage = 1) {
        return axiosBase.get(`/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${currentPage}`)
                    .then(response => {
                        return response.data
                      }
                    )
    },

    getPopularFilms(currentPage = 1) {
        return axiosBase.get(`/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${currentPage}`)
                    .then(response => {
                        return response.data
                      }
                    )
    },

    getAwaitFilms(currentPage = 1) {
        return axiosBase.get(`/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=${currentPage}`)
                    .then(response => {
                        return response.data
                      }
                    )
    },

}


export const bookmarksAPI = {
   
    setBookmarks(bookmarks) {
      const item = JSON.stringify(bookmarks)
      localStorage.setItem('bookmarks', item)
    },

    getBookmarks() {
      const item = localStorage.getItem('bookmarks')
      const bookmarks = JSON.parse(item)
      return bookmarks
    },

    clearBookmarks() {
      const item = JSON.stringify([])
      localStorage.setItem('bookmarks', item)
    }

}