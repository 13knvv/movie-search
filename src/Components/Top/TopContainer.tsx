import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useStores } from '../../MobX/stores'
import Top from './Top'

const TopContainer = () => {
  const { filmsStore } = useStores()
  const bestFilms = toJS(filmsStore.bestFilms.films)
  const popularFilms = toJS(filmsStore.popularFilms.films)

  useEffect(() =>  {
    filmsStore.getBestFilms(1)
    filmsStore.getPopularFilms(1)
  }, [])

  return <Top bestFilms={bestFilms}
              popularFilms={popularFilms} />
}

export default observer(TopContainer)