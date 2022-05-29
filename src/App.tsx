import React from 'react'
import s from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import TopContainer from './Components/Top/TopContainer'
import BestFilmsContainer from './Components/BestFilms/BestFilmsContainer'
import Movie from './Components/common/Movie/Movie'

function App() {
  return (
    <div>
      <Header />
      <div className={s.container}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/top' element={<TopContainer />} />
          <Route path='/top/best-films' element={<BestFilmsContainer />} />
          <Route path='/movie/:filmId' element={<Movie />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
