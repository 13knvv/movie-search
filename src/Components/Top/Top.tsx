import { IFilm } from '../../MobX/filmsStore'
import ScrollBlockContainer from '../common/ScrollBlock/ScrollBlockContainer'
import s from './Top.module.css'

interface ITopProps {
  bestFilms?: Array<IFilm>
}

const Top = (props: ITopProps) => {
  return (
      <ScrollBlockContainer  link={'/top/best-films'}
                             title={'250 лучших фильмов'}
                             films={props.bestFilms} />
  )
}

export default Top