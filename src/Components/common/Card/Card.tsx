import { NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { IBookmarkFilm } from '../../../MobX/bookmarksStore'
import { IFilm } from '../../../MobX/filmsStore'
import CircleRating from '../CircleRating/CircleRating'
import Heart from '../Heart/Heart'
import s from './Card.module.css'

interface ICardProps {
  film: IFilm | IBookmarkFilm
  inScroll?: boolean
}

const Card = (props: ICardProps) => {
  const { filmId,
          genres,
          nameRu,
          posterUrlPreview,
          rating,
          year } = props.film

  const listGenres = genres.map((item, i) => {
    return  <span className={s.itemFraming} key={i}>{item.genre}</span>
  })

  return (
    <NavLink to={`/movie/${filmId}`} className={s.cardLink} >
      <div className={s.card + ' ' + (props.inScroll ? s.cardInScroll : '')} >
        <div className={s.posterWrapp}>
          <img src={posterUrlPreview} alt={nameRu} />
          <div className={s.cardDetails}>
            <div>
              <span className={s.itemFraming + ' ' + s.itemYear}>{year} год</span>
              <NavLink to={''}>
                <div className={s.heart}>
                  <Heart filmId={props.film.filmId} />
                </div>
              </NavLink>
            </div>
            <div className={s.raitingWrapp}>
              <CircleRating percent={rating} inCard />
            </div>
            <div className={s.genresWrapp}>{listGenres}</div>
          </div>
        </div>
        <h4>{nameRu}</h4>
      </div>
    </NavLink>
    
  )
}

export default Card 