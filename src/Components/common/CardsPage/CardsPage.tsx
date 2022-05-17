import s from './CardsPage.module.css'

interface ICardsPageProps {
  children: Array<JSX.Element> | undefined
}

const CardsPage = (props: ICardsPageProps) => {
  
  return (
    <div className={s.wrapp}>
      {props.children}
    </div>
  )
}

export default CardsPage 