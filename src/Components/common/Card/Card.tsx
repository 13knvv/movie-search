import { NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { IFilm } from '../../../MobX/filmsStore'
import CircleRating from '../CircleRating/CircleRating'
import s from './Card.module.css'

interface ICardProps {
  film: IFilm
  inScroll?: boolean
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
    <NavLink to={`/movie/${filmId}`} className={s.cardLink} >
      <div className={s.card + ' ' + (props.inScroll ? s.cardInScroll : '')} >
        <div className={s.posterWrapp}>
          <img src={posterUrlPreview} alt={nameRu} />
          <div className={s.cardDetails}>
            <div>Жанр: {listGenres}</div>
            <CircleRating percent={rating} inCard />
            <div>Год:{year}</div>
          </div>
        </div>
        <h4>{nameRu}</h4>
      </div>
    </NavLink>
  )
}

export default Card 