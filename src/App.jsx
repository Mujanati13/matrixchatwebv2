import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
