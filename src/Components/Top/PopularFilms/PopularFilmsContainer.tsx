import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useStores } from '../../../MobX/stores'
import PopularFilms from './PopularFilms'

const PopularFilmsContainer = () => {
  const { filmsStore } = useStores()
  const popularFilms = toJS(filmsStore.popularFilms.films)
  const pagesCount: any = filmsStore.popularFilms.pagesCount
  const currentPage = filmsStore.popularFilmsCurrentPage

  useEffect(() =>  {
    filmsStore.getPopularFilms(currentPage)
  }, [])

  const onPageChange = (page: number) => {
    filmsStore.getPopularFilms(page)
  }

  return <PopularFilms pagesCount={pagesCount}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                    popularFilms={popularFilms} />
}

export default observer(PopularFilmsContainer) 