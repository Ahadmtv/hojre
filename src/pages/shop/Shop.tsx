import { useState } from "react"
import HeaderSecondry from "../../components/HeaderSecondry"
import ProductCards from "../../components/shop-sec/ProductCards"
import data from "../../products.json"
import Pagination from "../../components/shop-sec/Pagination"

const Shop = () => {
  const [currentPage,setCurrentPage]=useState<number>(1);
  const productPerPage:number=12;
  const pageNum=Math.ceil((data.length)/productPerPage);
  console.log(pageNum);
  console.log(data.length);
  const lastIndex=productPerPage * currentPage;
  const firstIndex=lastIndex - productPerPage;
  const product= data.slice(firstIndex,lastIndex);
  return (
    <div>
      <HeaderSecondry/>
      <div>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row mt-16">
            <div className="w-full lg:w-[65%]"><ProductCards data={product}/></div>
            <div className="w-full lg:w-[35%]"></div>
          </div>
          <Pagination  pageNum={pageNum} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
      </div>
    </div>
  )
}

export default Shop