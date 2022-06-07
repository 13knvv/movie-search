import { NavLink } from 'react-router-dom'
import CircleRating from '../common/CircleRating/CircleRating'
import s from './Main.module.css'

const Main = () => {
  return (
    <div>
      <NavLink to={'/top/best-films'} >250 лучших фильмов</NavLink>
      <CircleRating percent={6}  />
    </div>
  )
}

export default Main