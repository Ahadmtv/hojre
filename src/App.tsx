import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import {Home,Shop,Blog,About,Contact} from "./pages/index"
import { FC } from 'react';

const App:FC=()=>{
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />


        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/blog' element={<Blog/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
