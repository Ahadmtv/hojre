import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Shop, Blog, About, Contact } from "./pages/index"
import { FC, useEffect, useState } from 'react';
import SingleProduct from './pages/single-product/singleProduct';
import CardPage from './pages/card/CardPage';
import SingleBlog from './pages/single-blog/SingleBlog';
import SingIn from './pages/auth/SingIn';
import SignUp from './pages/auth/SignUp';
import ResetPass from './pages/auth/ResetPass';
import Privet from './pages/privet-route/Privet';
import ScrollTop from './components/ScrollTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase/Config';
import { useAppDispatch, useAppSelector } from './Redux/hooks';
import { cartinfo, setLoading } from './Redux/authSlice';
import Profile from './pages/profile/Profile';

const App: FC = () => {


  // import data from json server to the firestore

  // useEffect(() => {
  //   const ahad = async () => {
  //     const response = await fetch('http://localhost:3000/topTags');
  //     const data = await response.json();
  //     await setDoc(doc(db, "topTags","topTags"), {
  //       ...data
  //     });
  //   }
  //   ahad()
  // }, [])

  //  
  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
      <main className="App overflow-x-hidden">
        <BrowserRouter>
          <ScrollTop />
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
            <Route path='/profile' element={<Privet><Profile/></Privet>} />
            <Route path='/blogs/:id' element={<SingleBlog />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}
export default App;



