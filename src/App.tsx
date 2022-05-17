import React from 'react'
import s from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {
  return (
    <div>
      <Header />
      <div className={s.container}>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
