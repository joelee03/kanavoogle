import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectedRoute from './authentication/ProtectedRoute'

// pages & components
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Account from "./pages/Account"

// services 
import Blockchain from "./pages/Blockchain"
import Montessori from "./pages/Montessori"
import Skills from "./pages/Skills"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/dashboard' element={<ProtectedRoute component={Dashboard} />}/>
          <Route path='/account' element={<ProtectedRoute component={Account} />}/>
          <Route path='/blockchain' element={<ProtectedRoute component={Blockchain} />}/>
          <Route path='/montessori' element={<ProtectedRoute component={Montessori} />}/>
          <Route path='/skills' element={<ProtectedRoute component={Skills} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

