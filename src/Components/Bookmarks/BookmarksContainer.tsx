import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useStores } from '../../MobX/stores'
import Bookmarks from './Bookmarks'

const BookmarksContainer = () => {
  const { bookmarksStore } = useStores()
  const filmsOfBookmarks = toJS(bookmarksStore.filmsOfBookmarks)

  return <Bookmarks filmsOfBookmarks={filmsOfBookmarks} />
}

export default observer(BookmarksContainer) 