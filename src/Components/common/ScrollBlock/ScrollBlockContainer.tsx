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
  const [isBeforeArrowDisabled, setIsBeforeArrowDisabled] = useState<boolean>(true)
  const [isNextArrowDisabled, setIsNextArrowDisabled] = useState<boolean>(false)
  let step: number = 0
  const numberVisibleCards: number = 5
  let countCards: number = 0

  useEffect(() => {
    if (cardsWrapp.current) {
      step = (cardsWrapp.current.children[0]?.clientWidth ) * numberVisibleCards
      countCards = cardsWrapp.current.children.length
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

    if (newPosition === 0) {
      setIsBeforeArrowDisabled(true)
    }

    if (newPosition !== -step * (countCards / numberVisibleCards - 1)) {
      setIsNextArrowDisabled(false)
    }
  }

  const onNext = () => {
    let newPosition = cardsWrappPosition - step
    newPosition = Math.max(newPosition, -step * (countCards / numberVisibleCards - 1))
    setCardsWrappPosition(newPosition)

    if (newPosition !== 0) {
      setIsBeforeArrowDisabled(false)
    }

    if (newPosition === -step * (countCards / numberVisibleCards - 1)) {
      setIsNextArrowDisabled(true)
    }
  }

  return <ScrollBlock films={props.films}
                      link={props.link}
                      title={props.title}
                      onBefore={onBefore}
                      onNext={onNext}
                      cardsWrapp={cardsWrapp}
                      isBeforeArrowDisabled={isBeforeArrowDisabled}
                      isNextArrowDisabled={isNextArrowDisabled} />
}

export default ScrollBlockContainer