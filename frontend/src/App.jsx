import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from "./pages/Home"
import Account from "./pages/Account"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/account' element={<Account />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

