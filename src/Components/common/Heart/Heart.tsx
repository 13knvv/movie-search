import s from './Heart.module.css'
import heartSvg from '../../../assets/svg/heart.svg'
import heartRedSvg from '../../../assets/svg/heart-red.svg'
import { useEffect, useState } from 'react'
import { useStores } from '../../../MobX/stores'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

interface IHeartProps {
  filmId: number
}

const Heart = (props: IHeartProps) => {
  const { bookmarksStore } = useStores()
  const [ doesFilmHaveBookmark, setDoesFilmHaveBookmark ] = useState<boolean>(false)
  const filmsOfBookmarks = toJS(bookmarksStore.filmsOfBookmarks)

  useEffect(() => {

    if (bookmarksStore.getDoesFilmHaveBookmark(props.filmId)) {
      setDoesFilmHaveBookmark(true)
    }
    if (!bookmarksStore.getDoesFilmHaveBookmark(props.filmId)) {
      setDoesFilmHaveBookmark(false)
    }
    

  }, [filmsOfBookmarks])

  const onClick = () => {
    if (!bookmarksStore.getDoesFilmHaveBookmark(props.filmId)) {
      bookmarksStore.setBookmarkFilm(props.filmId)
    }
    if (bookmarksStore.getDoesFilmHaveBookmark(props.filmId)) {
      bookmarksStore.deleteBookmarkFilm(props.filmId)
    }

    console.log(filmsOfBookmarks);
    
  }
  
  return (
    <div onClick={onClick} className={s.heartWrapp} >
      <img src={doesFilmHaveBookmark ? heartRedSvg : heartSvg } alt="" />
    </div>
  )
  
}

export  default observer(Heart)