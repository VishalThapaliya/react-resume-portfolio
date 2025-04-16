import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// import pages
import About from './pages/about/About'
import Resume from './pages/resume/Resume'
import Portfolio from './pages/portfolio/Portfolio'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'


function App() {
  return (
    <>
      <main>
        <Sidebar />

        <div className="main-content">
          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path='/' element={<Navigate to='/about' />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/resume' element={<Resume />}/>
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route path='/blog' element={<Blog />}/>
                <Route path='/contact' element={<Contact />}/>
              </Routes>
          </BrowserRouter>       
        </div>
      </main>
    </>
  )
}

export default App
