import { NavLink } from 'react-router-dom'
import s from './Main.module.css'

const Main = () => {
  return (
    <div>
      <NavLink to={'/top/best-films'} >250 лучших фильмов</NavLink>
    </div>
  )
}

export default Main