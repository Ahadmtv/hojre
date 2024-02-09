import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Shop, Blog, About, Contact } from "./pages/index"
import { FC } from 'react';
import SingleProduct from './pages/single-product/singleProduct';
import CardPage from './pages/card/CardPage';
import SingleBlog from './pages/single-blog/SingleBlog';
import SingIn from './pages/auth/SingIn';
import SignUp from './pages/auth/SignUp';
import ResetPass from './pages/auth/ResetPass';
import Privet from './pages/privet-route/Privet';
import ScrollTop from './components/ScrollTop';

const App: FC = () => {
  return (
    <main className="App overflow-x-hidden">
      <BrowserRouter>
      <ScrollTop/>
        <Routes>
          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpass" element={<ResetPass />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/shop/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Privet><CardPage /></Privet>} />
          <Route path='/blogs/:id' element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
