import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <main>
        <Sidebar />

        <div className="main-content">
          <Navbar />
          <About />
        </div>
      </main>
    </>
  )
}

export default App
