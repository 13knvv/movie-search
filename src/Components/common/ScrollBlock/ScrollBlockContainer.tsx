import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IFilm } from '../../../MobX/filmsStore'
import Card from '../Card/Card'
import ScrollBlock from './ScrollBlock'
import s from './ScrollBlock.module.css'

interface IScrollBlockContainerProps {
  link: string
  title: string
  films: IFilm[] | undefined
}

const ScrollBlockContainer = (props: IScrollBlockContainerProps) => {
  const cardsWrapp = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [cardsWrappPosition, setCardsWrappPosition] = useState<number>(0)
  let step: number = 0
  const numberVisibleCards: number = 5

  useEffect(() => {
    if (cardsWrapp.current) {
      step = (cardsWrapp.current.children[0]?.clientWidth ) * numberVisibleCards
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

  return <ScrollBlock films={props.films}
                      link={props.link}
                      title={props.title}
                      onBefore={onBefore}
                      onNext={onNext}
                      cardsWrapp={cardsWrapp} />
}

export default ScrollBlockContainer