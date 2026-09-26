import { lazy, Suspense, useEffect } from "react"
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'

// import components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

// import pages
import About from './pages/about/About'

const Resume = lazy(() => import('./pages/resume/Resume'))
const Portfolio = lazy(() => import('./pages/portfolio/Portfolio'))
const Blog = lazy(() => import('./pages/blog/Blog'))
const Contact = lazy(() => import('./pages/contact/Contact'))

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <main>
        <Sidebar />

        <div className="main-content">
            <Navbar />
            <Suspense fallback={<div className="page-loading" aria-live>Loading...</div>}>
              <Routes>
                <Route path='/' element={<Navigate to='/about' replace />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/resume' element={<Resume />}/>
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route path='/blog' element={<Blog />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='*' element={<Navigate to="/about" replace />} />
              </Routes>
            </Suspense>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
