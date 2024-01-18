import { useState } from "react"
import HeaderSecondry from "../../components/HeaderSecondry"
import ProductCards from "../../components/shop-sec/ProductCards"
import data from "../../products.json"
import Pagination from "../../components/shop-sec/Pagination"
import SearchShop from "../../components/shop-sec/SearchShop"
import CategoryAll, { Iproduct } from "../../components/shop-sec/CategoryAll"
import PopularPosts from "../../components/shop-sec/PopularPosts"
import PopularTags from "../../components/shop-sec/PopularTags"

const Shop = () => {
  const [filterdPro, setFilterdPro] = useState<Iproduct[]>([...data]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const changeCate = (val: string) => {
    if(val==="همه"){
      setFilterdPro(data)
    }else{
      setFilterdPro(data.filter((d) => d.category.includes(val)));
    }
    setCurrentPage(1);
  }
  const productPerPage: number =12;
  const pageNum = Math.ceil((filterdPro.length) / productPerPage);
  const lastIndex = productPerPage * currentPage;
  const firstIndex = lastIndex - productPerPage;
  const ahad = filterdPro.slice(firstIndex, lastIndex);
  return (
    <div>
      <HeaderSecondry />
      <div>
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row my-16 gap-x-6">
            <div className="w-full lg:w-[65%]"><ProductCards data={ahad} /></div>
            <div className="w-full lg:w-[35%]">
              <SearchShop data={data} />
              <CategoryAll changeCate={changeCate} data={data} />
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
          {!(filterdPro.length<=productPerPage)&&<Pagination pageNum={pageNum} setCurrentPage={setCurrentPage} currentPage={currentPage} />}
        </div>
      </div>
    </div>
  )
}

export default Shop