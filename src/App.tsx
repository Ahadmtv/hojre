import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Shop, Blog, About, Contact } from "./pages/index"
import { FC } from 'react';
import Footer from './components/Footer';
import SingleProduct from './pages/single-product/singleProduct';
import CardPage from './pages/card/CardPage';
import SingleBlog from './pages/single-blog/SingleBlog';
import SingIn from './pages/auth/SingIn';
import SignUp from './pages/auth/SignUp';
import ResetPass from './pages/auth/ResetPass';

const App: FC = () => {
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpass" element={<ResetPass />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/shop/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<CardPage />} />
          <Route path='/blogs/:id' element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
