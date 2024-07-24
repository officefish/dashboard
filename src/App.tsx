//import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Dashboard from './pages/dashboard'
import Settings from './pages/settings'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
