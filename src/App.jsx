import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MainPage } from './pages/main-page'
import { OrigamiAPI } from './api/origami/origami'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { OrigamiPage } from './pages/origami-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path=':id' element={<OrigamiPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
