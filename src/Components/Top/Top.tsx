import { IFilm } from '../../MobX/filmsStore'
import ScrollBlockContainer from '../common/ScrollBlock/ScrollBlockContainer'
import s from './Top.module.css'

interface ITopProps {
  bestFilms?: Array<IFilm>
  popularFilms?: Array<IFilm>
}

const Top = (props: ITopProps) => {
  return (<>
      <ScrollBlockContainer  link={'/top/best-films'}
                             title={'250 лучших фильмов'}
                             films={props.bestFilms} />

      <ScrollBlockContainer  link={'/top/popular-films'}
                             title={'100 популярных фильмов'}
                             films={props.popularFilms} />
  </>)
}

export default Top