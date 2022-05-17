import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useStores } from '../../MobX/stores'
import Card from '../common/Card/Card'
import CardsPage from '../common/CardsPage/CardsPage'
import Pagination from '../common/Pagination/Pagination'
import s from './BestFilms.module.css'

const BestFilms = () => {
  const { filmsStore } = useStores()
  const films = toJS(filmsStore.bestFilms.films)
  const pagesCount: any = filmsStore.bestFilms.pagesCount
  const currentPage = filmsStore.bestFilmsCurrentPage
  const pages = []
  for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

  useEffect(() =>  {
    filmsStore.getBestFilms(currentPage)
  }, [])

  const onPageChange = (page: number) => {
    filmsStore.getBestFilms(page)
  }

  const cardsOfFilm = films?.map(film => {
    return <Card film={film} key={film.filmId} />
  })

  
  // const pagesComponents = pages.map((i, index) => {
  //     return <button key={index} className={currentPage === i ? s.user__btnPage_active : ''}
  //         onClick={() => onPageChange(i)}>{i}</button>
  // })


  return (
    <div>
      <Pagination pages={pages}
                  currentPage={currentPage}
                  onPageChange={onPageChange} />
      <CardsPage>
        {cardsOfFilm}
      </CardsPage>
      
    </div>
  )
}

export default observer(BestFilms) 