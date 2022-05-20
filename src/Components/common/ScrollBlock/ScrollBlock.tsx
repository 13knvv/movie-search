import { useEffect, useRef, useState } from 'react'
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
  const cardsWrapp = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [cardsWrappPosition, setCardsWrappPosition] = useState<number>(0)
  let step: number = 0
  const numberVisibleCards: number = 5

  useEffect(() => {
    if (cardsWrapp.current) {
      step = (cardsWrapp.current.children[0]?.clientWidth ) * numberVisibleCards
      console.log(cardsWrapp.current.children[0]?.clientWidth);
      
    }
  })

  useEffect(() => {
    if (cardsWrapp.current) {
      cardsWrapp.current.style.marginLeft = cardsWrappPosition + 'px'
    }
  }, [cardsWrappPosition])
  
  const onBefore = () => {
    let newPosition = cardsWrappPosition + step
    newPosition = Math.min(newPosition, 0)
    setCardsWrappPosition(newPosition)
  }

  const onNext = () => {
    let countCards: number = 0
    if (cardsWrapp.current) {
    countCards = cardsWrapp.current.children.length
    }
    
    let newPosition = cardsWrappPosition - step
    newPosition = Math.max(newPosition, -step * (countCards / numberVisibleCards - 1))
    setCardsWrappPosition(newPosition)
  }

  const cardsOfItems = props.films?.map( (film: IFilm) => {
    return (
        <Card film={film}  key={film.filmId} inScroll={true} />
    )
  })

  return (<>
    <div>
      <h2 className={s.title}><NavLink to={props.link} >{props.title}</NavLink></h2>
    </div>
    <div className={s.scrollContainer}>
      <div className={s.wrappForArrow}>
        <button className={s.beforeArrow} onClick={onBefore}>
          <svg fill="#fff" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
        </button>
      <div className={s.scrollWrapp}>
        <div className={s.cardsWrapp} ref={cardsWrapp} >
          {cardsOfItems}
        </div>
      </div>
        <button className={s.nextArrow} onClick={onNext}>
          <svg fill="#fff" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"/></svg>
        </button>
        </div>
    </div>
  </>)
}

export default ScrollBlock