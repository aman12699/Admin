// import logo from './logo.svg';

import React from 'react'
import './App.css'
import Header from './components/Layout/Header'
import { Outlet } from 'react-router-dom'


// import Home from './Home'

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />

      </main>
    </>
  )

}
export default App