import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import GiverPage from './pages/GiverPage'
import ReceiverPage from './pages/ReceiverPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/giver" element={<GiverPage />} />
      <Route path="/receiver" element={<ReceiverPage />} />
    </Routes>
  )
}

export default App