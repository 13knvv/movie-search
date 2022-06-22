import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStores } from '../../../MobX/stores'
import CircleRating from '../CircleRating/CircleRating'
import Heart from '../Heart/Heart'
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

  const countries = movie.countries?.map(item => {
    return <span className={s.itemFraming}>{item.country}</span>
  })

  const genres = movie.genres?.map(item => {
    return <span className={s.itemFraming}>{item.genre}</span>
  })

  const ageLimits = movie.ratingAgeLimits?.slice(3) + '+'
  
  return (
    <div>
      <div className={s.posterInfoWrapp}>
        <div className={s.poster}>
          <div className={s.heartWrapp}>
              <Heart filmId={movie.kinopoiskId}/>
          </div>
          <img src={movie.posterUrl} alt={namesMovie} />
        </div>
        <div className={s.info}>
          <h2>{namesMovie}</h2>
            
          { movie.ratingKinopoisk && 
                            <div className={s.ratingWpapp}>
                              <div className={s.ratingTitle}>Kinopoisk</div> 
                              <CircleRating percent={movie.ratingKinopoisk}/>
                              <div className={s.ratingVoteCount}>{movie?.ratingKinopoiskVoteCount}</div> 
                              <div className={s.ratingVoteCount}>голосов</div>
                            </div>
          }

          { movie.ratingImdb &&
                            <div className={s.ratingWpapp}>
                              <div className={s.ratingTitle}>Imdb</div> 
                              <CircleRating percent={movie.ratingImdb}/>
                              <div className={s.ratingVoteCount}>{movie?.ratingImdbVoteCount}</div> 
                              <div className={s.ratingVoteCount}>голосов</div>
                            </div>
          }

          { movie.year && 
                      <div className={s.infoItem}>
                        <span className={s.infoItemTitle}>Год: </span>
                        <span className={s.itemFraming}>{movie.year}</span>
                      </div>
          }

          { countries && 
                      <div className={s.infoItem}>
                        <span className={s.infoItemTitle}>Страна: </span>
                        {countries}
                      </div>
          }

          { genres && 
                    <div className={s.infoItem}>
                      <span className={s.infoItemTitle}>Жанр: </span>
                      <div className={s.genresWrapp}>{genres}</div>
                    </div>
          }

          { movie.filmLength &&
                    <div className={s.infoItem}>
                      <span className={s.infoItemTitle}>Продолжительность: </span>
                      <span className={s.itemFraming}>{movie.filmLength + ' мин.'}</span>
                    </div>
          }
          
          { ageLimits &&
                    <div className={s.infoItem}>
                      <span className={s.infoItemTitle}>Возрастные ограничения: </span>
                      <span className={s.itemFraming}>{ageLimits}</span>
                    </div>
          }
          
          { movie.description && 
                    <div className={s.description}>
                      {movie.description}
                    </div>
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