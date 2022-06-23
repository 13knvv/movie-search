import React from 'react'
import s from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Components/Main/Main'
import TopContainer from './Components/Top/TopContainer'
import BestFilmsContainer from './Components/Top/BestFilms/BestFilmsContainer'
import Movie from './Components/common/Movie/Movie'
import BookmarksContainer from './Components/Bookmarks/BookmarksContainer'
import HeaderContainer from './Components/Header/HeaderContainer'
import PopularFilmsContainer from './Components/Top/PopularFilms/PopularFilmsContainer'

function App() {
  return (
    <div>
      <HeaderContainer />
      <div className={s.container}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/top' element={<TopContainer />} />
          <Route path='/top/best-films' element={<BestFilmsContainer />} />
          <Route path='/top/popular-films' element={<PopularFilmsContainer />} />
          <Route path='/movie/:filmId' element={<Movie />} />
          <Route path='/bookmarks' element={<BookmarksContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
