//import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Dashboard from './pages/Dashboard'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          {/* <Route path="/settings" element={<Settings />}/> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
