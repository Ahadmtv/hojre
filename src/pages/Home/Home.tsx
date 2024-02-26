import { FC, useEffect } from "react"
import Banner from "../../components/home-sec/Banner"
import CatHome from "../../components/home-sec/CatHome"
import ProductHome from "../../components/home-sec/ProductHome"
import RegisterHome from "../../components/home-sec/RegisterHome"
import MapHome from "../../components/home-sec/MapHome"
import AboutHome from "../../components/home-sec/AboutHome"
import AplicationHome from "../../components/home-sec/AplicationHome"
import BrandHome from "../../components/home-sec/BrandHome"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useAppDispatch, useAppSelector } from "../../Redux/hooks"
import { cartinfo } from "../../Redux/authSlice"
import Loader from "../../components/loader/Loader"
const Home: FC = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector<any>((state) => state.auth.user);
  let uid = ""
  if (Object.keys(user).length !== 0) {
    uid = user.uid;
  }
  const isLoading = useAppSelector(state => state.auth.isLoading);
  //دریافت محصولات  سبد خرید کاربر و ذخیره آن در متعیر cartProduct در REDUX
  useEffect(() => {
    const addCart = async () => {
      if (uid) {
        await dispatch(cartinfo({ uid }));
      }
    }
    addCart();
  },[dispatch]);


  return (
    <div>
      {isLoading && <Loader/>}
      <Navbar />
      <Banner />
      <CatHome />
      <ProductHome />
      <RegisterHome />
      <MapHome />
      <AboutHome />
      <AplicationHome />
      <BrandHome />
      <Footer />
    </div>
  )
}

export default Home