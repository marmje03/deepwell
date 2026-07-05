import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<div>Shop</div>} />
        <Route path="/recipes" element={<div>Recipes</div>} />
        <Route path="/brew-lab" element={<div>Brew Lab</div>} />
        <Route path="/journal" element={<div>Journal</div>} />
        <Route path="/account" element={<div>Account</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
