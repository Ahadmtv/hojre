import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import {Home,Shop,Blog,About,Contact} from "./pages/index"
import { FC } from 'react';
import Footer from './components/Footer';

const App:FC=()=>{
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/درباره ما' element={<About/>}/>
          <Route path='/ارتباط با ما' element={<Contact/>}/>
          <Route path='/فروشگاه' element={<Shop/>}/>
          <Route path='/مطالب' element={<Blog/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
