import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useStores } from '../../MobX/stores'
import Header from './Header'

const HeaderContainer = () => {
  const { bookmarksStore } = useStores()

  useEffect(() => {
    bookmarksStore.getBookmarksFilms()
  }, [])

  return <Header filmsOfBookmarks={bookmarksStore.filmsOfBookmarks} />
}

export default observer(HeaderContainer)