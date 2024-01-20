import { FC } from "react"
import persian from "persianjs"
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../Redux/ProductsSlice";

const Pagination: FC = () => {
  const Dispatch=useDispatch();
  const {filterdPro,currentPage,productPerPage}=useSelector((state:any)=>state.products);
  const pageNum = Math.ceil((filterdPro.length) / productPerPage);
  let pages: number[] = [];
  for (let i: number = 1; i <= pageNum; i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center items-center my-10">
      <ul className="flex items-center px-10 py-5 gap-2">
        {pages.map((page,i) => {
          return (
            <li key={i} className={`p-4 hover:bg-amber-500 cursor-pointer duration-150 ease-linear rounded-full w-[20px] h-[20px] flex justify-center items-center my-shadow ${currentPage===page?"bg-amber-300":"bg-white"}`} onClick={()=>Dispatch(setCurrentPage(page))}>{persian(page).englishNumber().toString() }</li>
          )
        })}

      </ul>
    </div>
  )
}

export default Pagination
