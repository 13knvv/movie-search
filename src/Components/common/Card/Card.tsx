import { IFilm } from '../../../MobX/filmsStore'
import s from './Card.module.css'

interface ICardProps {
  film: IFilm
}

const Card = (props: ICardProps) => {
  const { countries,
          filmId,
          filmLength,
          genres,
          nameEn,
          nameRu,
          posterUrl,
          posterUrlPreview,
          rating,
          ratingVoteCount,
          year } = props.film

  const listGenres = genres.map(item => item.genre).join(', ')
  
  return (
    <div className={s.card}>
      <div className={s.posterWrapp}>
        <img src={posterUrlPreview} alt={nameRu} />
        <div className={s.cardDetails}>
          <div>Жанр: {listGenres}</div>
          {rating}
          <div>Год:{year}</div>
        </div>
      </div>
      <h3>{nameRu}</h3>
    </div>
  )
}

export default Card 