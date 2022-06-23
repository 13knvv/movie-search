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
    <div className={s.cardWrapp}>
      <NavLink to={`/movie/${filmId}`} className={s.cardLink} >
        <div className={s.card + ' ' + (props.inScroll ? s.cardInScroll : '')} >
          <div className={s.posterWrapp}>
            <img src={posterUrlPreview} alt={nameRu} />
            <div className={s.cardDetails}>
              <div>
                <div className={s.itemFraming + ' ' + s.itemYear}>
                  {year} год
                </div>
              </div>
              { !!+rating && //// если рейтинга нет то приходит ожидаеммый рейтинг как строка он нам не нужен
                  <div className={s.raitingWrapp}>
                    <CircleRating percent={rating} inCard />
                  </div>
              }
              <div className={s.genresWrapp}>
                {listGenres}
              </div>
            </div>
          </div>
          <h4>{nameRu}</h4>
        </div>
      </NavLink>
      <div className={s.heart + ' ' + (props.inScroll ? s.heartInScroll : '')}>
        <Heart filmId={props.film.filmId} />
      </div>
    </div>
  )
}

export default Card 