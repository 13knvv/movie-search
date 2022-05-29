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

  const namesMovie = [movie.nameRu, movie.nameEn, movie.nameOriginal].filter((name) => {
    if (name) return name
  }).join(' / ')
  
  return (
    <div>
      <div className={s.posterInfoWrapp}>
        <div className={s.poster}>
          <img src={movie.posterUrlPreview} alt="" />
        </div>
        <div className={s.info}>
          {namesMovie}
          {movie.description}
        </div>
        
      </div>
      
      <div className={s.coverUrl}>
        <img src={movie.coverUrl} alt="" />
      </div>
    </div>
  )
  
}

export  default observer(Movie)