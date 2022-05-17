import { NavLink } from 'react-router-dom'
import s from './Top.module.css'

const Top = () => {
  return (
    <div>
top
      <NavLink to={'/top/best-films'} >250 лучших фильмов</NavLink>
    </div>
  )
}

export default Top