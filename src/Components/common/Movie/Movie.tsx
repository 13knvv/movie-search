import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStores } from '../../../MobX/stores'
import s from './Movie.module.css'


const Movie = () => {
  const { filmId } = useParams()
  const { movieStore } = useStores()
  const movie = toJS(movieStore.movie)

  useEffect(() =>  {
    if (filmId) {
      movieStore.getMovie(filmId)
    }
  }, [])

  const namesMovie = [movie.nameRu, movie.nameEn, movie.nameOriginal].filter(name => {
    if (name) return name
  }).join(' / ')

  const countries = movie.countries?.map(item => item.country).join(', ')
  const genres = movie.genres?.map(item => item.genre).join(', ')
  const ageLimits = movie.ratingAgeLimits?.slice(3) + '+'
  
  return (
    <div>
      <div className={s.posterInfoWrapp}>
        <div className={s.poster}>
          <img src={movie.posterUrl} alt={namesMovie} />
        </div>
        <div className={s.info}>
          <h3>{namesMovie}</h3>
          { movie.ratingKinopoisk && 
                                  <div>Рейтинг Kinopoisk: {movie.ratingKinopoisk} /
                                    {movie?.ratingKinopoiskVoteCount} голосов
                                  </div>
          }

          { movie.ratingImdb &&  
                            <div>Рейтинг Imdb: {movie.ratingImdb} / 
                              {movie?.ratingImdbVoteCount} голосов
                            </div>
          }

          { movie.year && 
                      <div>Год: {movie.year}</div>
          }

          { countries && 
                      <div>Страна: {countries}</div>
          }

          { genres && 
                    <div>Жанр: {genres}</div>
          }

          { movie.filmLength &&
                    <div>Продолжительность: {movie.filmLength + ' мин.'}</div>
          }
          
          { ageLimits &&
                    <div>Возрастные ограничения: {ageLimits}</div>
          }
          
          { movie.description && 
                    <div>{movie.description}</div>
          }
          
        </div>
        
      </div>
      
      <div className={s.coverUrl}>
        <img src={movie.coverUrl} alt={namesMovie} />
      </div>
    </div>
  )
  
}

export  default observer(Movie)