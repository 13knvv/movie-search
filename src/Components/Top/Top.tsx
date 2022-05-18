import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { IFilm } from '../../MobX/filmsStore'
import { useStores } from '../../MobX/stores'
import ScrollBlock from '../common/ScrollBlock/ScrollBlock'
import s from './Top.module.css'

const Top = () => {
  const { filmsStore } = useStores()
  const films = toJS(filmsStore.bestFilms.films)

  useEffect(() =>  {
    filmsStore.getBestFilms(1)
  }, [])

  return (
    <div>
      <ScrollBlock  link={'/top/best-films'}
                    title={'250 лучших фильмов'}
                    films={films} />
    </div>
  )
}

export default observer(Top)