import { IFilm } from '../../../MobX/filmsStore'
import s from './BestFilms.module.css'

interface ICardProps {
  film: IFilm
}

const Card = (props: ICardProps) => {
  
  return (
    <div>
      bestFilmsq
      {props.film.nameRu}
    </div>
  )
}

export default Card 