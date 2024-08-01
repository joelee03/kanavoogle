import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Account from "./pages/Account"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Account />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

