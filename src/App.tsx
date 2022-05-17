import React from 'react'
import s from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Top from './Components/Top/Top'
import BestFilms from './Components/BestFilms/BestFilms'

function App() {
  return (
    <div>
      <Header />
      <div className={s.container}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/top' element={<Top />} />
          <Route path='/top/best-films' element={<BestFilms />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
