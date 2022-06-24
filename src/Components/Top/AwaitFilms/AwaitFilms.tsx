import { IFilm } from '../../../MobX/filmsStore'
import Card from '../../common/Card/Card'
import CardsPage from '../../common/CardsPage/CardsPage'
import Pagination from '../../common/Pagination/Pagination'

interface IAwaitFilmsProps {
  pagesCount: number
  currentPage: number
  onPageChange: (page: number) => any
  awaitFilms?: Array<IFilm>
}

const AwaitFilms = (props: IAwaitFilmsProps) => {
  const cardsOfFilm = props.awaitFilms?.map(film => {
    return <Card film={film} key={film.filmId} />
  })

  return (
    <div>
      <h2>Топ ожидаемых фильмов</h2>
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

export default AwaitFilms