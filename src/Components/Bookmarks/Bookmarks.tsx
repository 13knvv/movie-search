import { IBookmarkFilm } from '../../MobX/bookmarksStore'
import { IFilm } from '../../MobX/filmsStore'
import Card from '../common/Card/Card'
import CardsPage from '../common/CardsPage/CardsPage'
import s from './Bookmarks.module.css'

interface IBookmarksProps {
  filmsOfBookmarks?: Array<IBookmarkFilm>
}

const Bookmarks = (props: IBookmarksProps) => {
  const cardsOfFilm = props.filmsOfBookmarks?.map(film => {
    return <Card film={film} key={film.filmId} />
  })

  return (
    <div>
      <h2>Мои закладки</h2>
      <CardsPage>
        {cardsOfFilm}
      </CardsPage>
    </div>
  )
}

export default Bookmarks