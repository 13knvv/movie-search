import { IFilm } from '../../../MobX/filmsStore'
import Card from '../../common/Card/Card'
import CardsPage from '../../common/CardsPage/CardsPage'
import Pagination from '../../common/Pagination/Pagination'

interface IPopularFilmsProps {
  pagesCount: number
  currentPage: number
  onPageChange: (page: number) => any
  popularFilms?: Array<IFilm>
}

const PopularFilms = (props: IPopularFilmsProps) => {
  const cardsOfFilm = props.popularFilms?.map(film => {
    return <Card film={film} key={film.filmId} />
  })

  return (
    <div>
      <h2>100 популярных фильмов</h2>
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

export default PopularFilms