import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './authentication/AuthContext';

// pages & components
import Home from "./pages/Home"
import Preview from "./pages/Preview"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Navbar from './ui/navbar';
import Footer from './ui/footer';

// services 
import Blockchain from "./pages/Blockchain"
import Montessori from "./pages/Montessori"
import Skills from "./pages/Skills"

// courses
import Courses from "./pages/Courses"
import CoursePreview from './pages/CoursePreview';

// payment success
import Success from './pages/Success';
import LearnHTML from './pages/LearnHTML';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/preview' element={<Preview />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<Signup />}/>
              <Route path='/blockchain' element={<Blockchain />}/>
              <Route path='/skills' element={<Skills />}/>
              <Route path='/montessori' element={<Montessori />}/>
              <Route path='/courses' element={<Courses />}/>
              <Route path="/courses//html" element={<LearnHTML />} />
              <Route path="/courses/:courseId" element={<CoursePreview />} />
              <Route path='/success' element={<Success />}/>
            </Routes>
            <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

