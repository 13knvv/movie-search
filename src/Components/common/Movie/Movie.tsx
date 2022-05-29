import { useParams } from 'react-router-dom'
import s from './Movie.module.css'


const Movie = () => {
  const { filmId } = useParams()
  
  return (
    <div >
      {filmId}
    </div>
  )
  
}

export  default Movie