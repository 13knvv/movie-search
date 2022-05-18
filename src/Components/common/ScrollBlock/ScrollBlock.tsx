import { NavLink } from 'react-router-dom'
import { IFilm } from '../../../MobX/filmsStore'
import Card from '../Card/Card'
import s from './ScrollBlock.module.css'

interface IScrollBlockProps {
  link: string
  title: string
  films: IFilm[] | undefined
}

const ScrollBlock = (props: IScrollBlockProps) => {
  const cardsOfItems = props.films?.map( (film: IFilm) => {
    return (
      <div key={film.filmId}>
        <Card film={film} inScroll={true} />
      </div>
    )
  })

  return (
    <div className={s.scrollContainer}>
      <div>
        <h2 className={s.title}><NavLink to={props.link} >{props.title}</NavLink></h2>
      </div>
      <div className={s.scrollWrapp}>
        <div className={s.cardsWrapp}>
          {cardsOfItems}
        </div>
      </div>
        <div className={s.beforeArrow}>
        <svg fill="#fff" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
        </div>
        <div className={s.nextArrow}>
          <svg fill="#fff" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
        </div>
    </div>
  )
}

export default ScrollBlock