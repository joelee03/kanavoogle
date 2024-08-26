import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './authentication/AuthContext';

// pages & components
import Home from "./pages/Home"
import Preview from "./pages/Preview"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

// services 
import Blockchain from "./pages/Blockchain"
import Montessori from "./pages/Montessori"
import Skills from "./pages/Skills"

// courses
import Courses from "./pages/Courses"

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/preview' element={<Preview />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/blockchain' element={<Blockchain />}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/montessori' element={<Montessori />}/>
            <Route path='/courses' element={<Courses />}/>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

