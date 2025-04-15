import './App.css'
import Navbar from './assets/components/Navbar'
import Sidebar from './assets/components/Sidebar'

function App() {
  return (
    <>
      <main>
        <Sidebar />

        <div className="main-content">
          <Navbar />
        </div>
      </main>
    </>
  )
}

export default App
