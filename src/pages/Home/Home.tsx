import { FC } from "react"
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

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CatHome/>
      <ProductHome/>
      <RegisterHome/>
      <MapHome/>
      <AboutHome/>
      <AplicationHome/>
      <BrandHome/>
      <Footer />

    </div>
  )
}

export default Home