import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

