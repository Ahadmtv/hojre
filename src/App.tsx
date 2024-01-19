import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import {Home,Shop,Blog,About,Contact} from "./pages/index"
import { FC } from 'react';
import Footer from './components/Footer';
import SingleProduct from './pages/single-product/singleProduct';
import CardPage from './pages/card/CardPage';
import SingleBlog from './pages/single-blog/SingleBlog';

const App:FC=()=>{
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/درباره-ما' element={<About/>}/>
          <Route path='/ارتباط-با-ما' element={<Contact/>}/>
          <Route path='/فروشگاه' element={<Shop/>}/>
          <Route path='/مطالب' element={<Blog/>}/>
          <Route path='/فروشگاه/:id' element={<SingleProduct/>}/>
          <Route path='/سبد-خرید' element={<CardPage/>}/>
          <Route path='/مطالب/:id' element={<SingleBlog/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
