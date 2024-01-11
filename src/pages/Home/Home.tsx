import { FC } from "react"
import Banner from "../../components/Banner"
import CatHome from "../../components/CatHome"
import ProductHome from "../../components/ProductHome"

const Home: FC = () => {
  return (
    <div>
      <Banner />
      <CatHome/>
      <ProductHome/>
    </div>
  )
}

export default Home