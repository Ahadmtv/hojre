import { FC } from "react"
import Banner from "../../components/Banner"
import CatHome from "../../components/CatHome"
import ProductHome from "../../components/ProductHome"
import RegisterHome from "../../components/RegisterHome"
import MapHome from "../../components/MapHome"
import AboutHome from "../../components/AboutHome"

const Home: FC = () => {
  return (
    <div>
      <Banner />
      <CatHome/>
      <ProductHome/>
      <RegisterHome/>
      <MapHome/>
      <AboutHome/>
    </div>
  )
}

export default Home