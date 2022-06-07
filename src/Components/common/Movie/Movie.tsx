import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStores } from '../../../MobX/stores'
import CircleRating from '../CircleRating/CircleRating'
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
          <h2>{namesMovie}</h2>
          { movie.ratingKinopoisk && 
                                  <div>
                                    <div>Kinopoisk</div> 
                                    <CircleRating percent={movie.ratingKinopoisk}/>
                                    <div>{movie?.ratingKinopoiskVoteCount} голосов</div>
                                  </div>
          }

          { movie.ratingImdb &&
                            <div>
                              <div>Imdb</div> 
                              <CircleRating percent={movie.ratingImdb}/>
                              <div>{movie?.ratingImdbVoteCount} голосов</div>
                            </div>
          }

          { movie.year && 
                      <div><span className={s.infoItem}>Год: </span>{movie.year}</div>
          }

          { countries && 
                      <div><span className={s.infoItem}>Страна: </span>{countries}</div>
          }

          { genres && 
                    <div><span className={s.infoItem}>Жанр: </span>{genres}</div>
          }

          { movie.filmLength &&
                    <div><span className={s.infoItem}>Продолжительность: </span>{movie.filmLength + ' мин.'}</div>
          }
          
          { ageLimits &&
                    <div><span className={s.infoItem}>Возрастные ограничения: </span>{ageLimits}</div>
          }
          
          { movie.description && 
                    <p>{movie.description}</p>
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