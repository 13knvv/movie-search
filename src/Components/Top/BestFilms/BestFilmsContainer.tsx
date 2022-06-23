import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useStores } from '../../../MobX/stores'
import BestFilms from './BestFilms'

const BestFilmsContainer = () => {
  const { filmsStore } = useStores()
  const bestFilms = toJS(filmsStore.bestFilms.films)
  const pagesCount: any = filmsStore.bestFilms.pagesCount
  const currentPage = filmsStore.bestFilmsCurrentPage

  useEffect(() =>  {
    filmsStore.getBestFilms(currentPage)
  }, [])

  const onPageChange = (page: number) => {
    filmsStore.getBestFilms(page)
  }

  return <BestFilms pagesCount={pagesCount}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                    bestFilms={bestFilms} />
}

export default observer(BestFilmsContainer) 