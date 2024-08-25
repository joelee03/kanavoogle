import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectedRoute from './authentication/ProtectedRoute'

// pages & components
import Home from "./pages/Home"
import Preview from "./pages/Preview"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Account from "./pages/Account"

// services 
import Blockchain from "./pages/Blockchain"
import Montessori from "./pages/Montessori"
import Skills from "./pages/Skills"

import Payment from './pages/Payment';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/preview' element={<Preview />}/>
          <Route path='/payment' element={<Payment />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/dashboard' element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path='/account' element={<ProtectedRoute />}>
            <Route index element={<Account />} />
          </Route>
          <Route path='/blockchain' element={<ProtectedRoute />}>
            <Route index element={<Blockchain />} />
          </Route>
          <Route path='/montessori' element={<ProtectedRoute />}>
            <Route index element={<Montessori />} />
          </Route>
          <Route path='/skills' element={<ProtectedRoute />}>
            <Route index element={<Skills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

