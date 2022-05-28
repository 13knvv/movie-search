import { IFilm } from '../../MobX/filmsStore'
import Card from '../common/Card/Card'
import CardsPage from '../common/CardsPage/CardsPage'
import Pagination from '../common/Pagination/Pagination'
import s from './BestFilms.module.css'

interface IBestFilmsProps {
  pagesCount: number
  currentPage: number
  onPageChange: (page: number) => any
  bestFilms?: Array<IFilm>
}

const BestFilms = (props: IBestFilmsProps) => {
  const cardsOfFilm = props.bestFilms?.map(film => {
    return <Card film={film} key={film.filmId} />
  })

  return (
    <div>
      <Pagination pagesCount={props.pagesCount}
                  currentPage={props.currentPage}
                  onPageChange={props.onPageChange} />
      <CardsPage>
        {cardsOfFilm}
      </CardsPage>
      <Pagination pagesCount={props.pagesCount}
                  currentPage={props.currentPage}
                  onPageChange={props.onPageChange} />
    </div>
  )
}

export default BestFilms