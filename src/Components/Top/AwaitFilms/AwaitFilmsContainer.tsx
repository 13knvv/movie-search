import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useStores } from '../../../MobX/stores'
import AwaitFilms from './AwaitFilms'

const AwaitFilmsContainer = () => {
  const { filmsStore } = useStores()
  const awaitFilms = toJS(filmsStore.awaitFilms.films)
  const pagesCount: any = filmsStore.awaitFilms.pagesCount
  const currentPage = filmsStore.awaitFilmsCurrentPage

  useEffect(() =>  {
    filmsStore.getAwaitFilms(currentPage)
  }, [])

  const onPageChange = (page: number) => {
    filmsStore.getAwaitFilms(page)
  }

  return <AwaitFilms pagesCount={pagesCount}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                    awaitFilms={awaitFilms} />
}

export default observer(AwaitFilmsContainer) 