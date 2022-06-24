import { IFilm } from '../../MobX/filmsStore'
import ScrollBlockContainer from '../common/ScrollBlock/ScrollBlockContainer'
import s from './Top.module.css'

interface ITopProps {
  bestFilms?: Array<IFilm>
  popularFilms?: Array<IFilm>
  awaitFilms?: Array<IFilm>
}

const Top = (props: ITopProps) => {
  return (<>
      <ScrollBlockContainer  link={'/top/popular-films'}
                             title={'100 популярных фильмов'}
                             films={props.popularFilms} />

      <ScrollBlockContainer  link={'/top/await-films'}
                             title={'Топ ожидаемых фильмов'}
                             films={props.awaitFilms} />
      
      <ScrollBlockContainer  link={'/top/best-films'}
                             title={'250 лучших фильмов'}
                             films={props.bestFilms} />
  </>)
}

export default Top