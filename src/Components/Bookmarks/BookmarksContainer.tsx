import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../MobX/stores'
import Bookmarks from './Bookmarks'

const BookmarksContainer = () => {
  const { bookmarksStore } = useStores()

  return <Bookmarks bookmarksStore={bookmarksStore} />
}

export default observer(BookmarksContainer) 