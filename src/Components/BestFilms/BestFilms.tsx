import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useStores } from '../../MobX/stores'
import Card from '../common/Card/Card'
import CardsPage from '../common/CardsPage/CardsPage'
import s from './BestFilms.module.css'

const BestFilms = () => {
  const { filmsStore } = useStores()
  const films = toJS(filmsStore.bestFilms.films)
console.log(films);

  useEffect(() =>  {
    filmsStore.getBestFilms(1)
  }, [])

  const cardsOfFilm = films?.map(film => {
    return <Card film={film} key={film.filmId} />
  })

  return (
    <div>
      <CardsPage>
        {cardsOfFilm}
      </CardsPage>
      
    </div>
  )
}

export default observer(BestFilms) 