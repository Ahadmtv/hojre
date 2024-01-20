import HeaderSecondry from "../../components/HeaderSecondry"
import ProductCards from "../../components/shop-sec/ProductCards"
import Pagination from "../../components/shop-sec/Pagination"
import SearchShop from "../../components/shop-sec/SearchShop"
import CategoryAll from "../../components/shop-sec/CategoryAll"
import PopularPosts from "../../components/shop-sec/PopularPosts"
import PopularTags from "../../components/shop-sec/PopularTags"
import { useSelector } from "react-redux"
const Shop = () => {
  const {filterdPro,productPerPage}=useSelector((state:any)=>state.products);
  return (
    <div>
      <HeaderSecondry />
      {filterdPro && 
      <div>
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row my-16 gap-x-6">
            <div className="w-full lg:w-[65%]"><ProductCards/></div>
            <div className="w-full lg:w-[35%]">
              <SearchShop />
              <CategoryAll/>
              <div className="hidden lg:flex flex-col gap-5">
                <PopularPosts/>
              <PopularTags/>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden flex-col md:flex-row gap-5">
            <PopularPosts/>
          <PopularTags/>
          </div>
          {filterdPro.length>productPerPage && <Pagination/>}
        </div>
      </div>
    }
    </div>
  )
}

export default Shop