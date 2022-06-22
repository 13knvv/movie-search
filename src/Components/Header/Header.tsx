import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import movieSearchLogo from '../../assets/svg/movieSearch-logo.svg'
import { IBookmarkFilm } from '../../MobX/bookmarksStore'
import s from './Header.module.css'

interface IHeaderProps {
  filmsOfBookmarks: Array<IBookmarkFilm>
}

const Header = (props: IHeaderProps) => {

  return (
    <header className={s.header}>
      <div className={s.logoWrapp}>
        <img className={s.logoSvg} src={movieSearchLogo} alt="Movie search logo" />
        <h1>Movie search</h1>
      </div>
      <ul className={s.menu}>
        <li>
          <NavLink className = { navData => navData.isActive ? s.navLink_Active : s.navLink }
                   to={'/'}>
            <div className={s.menuItem}>
              Главная
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className = { navData => navData.isActive ? s.navLink_Active : s.navLink }
                   to={'/top'}>
            <div className={s.menuItem}>
              Топ
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className = { navData => navData.isActive ? s.navLink_Active : s.navLink }
                   to={'/premieres'}>
            <div className={s.menuItem}>
              Кинопремьеры
            </div>
          </NavLink>
        </li>
      </ul>
      <NavLink className = { navData => navData.isActive ? s.navLink_Active : s.navLink }
               to={'/bookmarks'}>
        <div className={s.bookmarks}>
          Закладки
          { !!props.filmsOfBookmarks.length &&
                  <span className={s.bookmarksCount}>
                    {props.filmsOfBookmarks.length}
                  </span>
          }
        </div>
      </NavLink>
    </header>
  )
}

export default observer(Header)