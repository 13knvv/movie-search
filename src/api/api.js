import axios from "axios";

const axiosBase = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech',
    headers: { 'X-API-KEY': '9da5e9d0-bb84-42d2-8ee3-47aec39d2a6a',
               'Content-Type': 'application/json', }
})

export const filmAPI = {
    
    getBestFilms(currentPage = 1) {
        return axiosBase.get(`/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${currentPage}`)
            .then(response => {
              console.log(response.data);
              return response.data
            }
              )
    }

}