import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import RecipesGallery from './pages/Recipes/RecipesGallery'
import RecipeDetail from './pages/Recipes/RecipeDetail'
// import JournalPage from './pages/Journal/JournalPage'
// import ArticleDetail from './pages/Journal/ArticleDetail'
import BrewLab from './pages/BrewLab/BrewLab'
import ShopPage from './pages/Shop/ShopPage'
import ProductDetail from './pages/Shop/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:slug" element={<ProductDetail />} />
        <Route path="/recipes" element={<RecipesGallery />} />
        <Route path="/recipes/:slug" element={<RecipeDetail />} />
        <Route path="/brew-lab" element={<BrewLab />} />
        {/* <Route path="/journal" element={<JournalPage />} /> */}
        {/* <Route path="/journal/:slug" element={<ArticleDetail />} /> */}
        <Route path="/account" element={<div>Account</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
