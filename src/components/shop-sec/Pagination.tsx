import { Dispatch, FC, SetStateAction } from "react"
import persian from "persianjs"
interface Iprops {
  pageNum: number
  setCurrentPage:Dispatch<SetStateAction<number>>
  currentPage:number
}
const Pagination: FC<Iprops> = ({ pageNum,setCurrentPage,currentPage}) => {
  let pages: number[] = [];
  for (let i: number = 1; i <= pageNum; i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center items-center my-10">
      <ul className="flex items-center px-10 py-5 gap-2">
        {pages.map((page,i) => {
          return (
            <li key={i} className={`p-4 hover:bg-amber-500 cursor-pointer duration-150 ease-linear rounded-full w-[20px] h-[20px] flex justify-center items-center my-shadow ${currentPage===page?"bg-amber-300":"bg-white"}`} onClick={()=>setCurrentPage(page)}>{persian(page).englishNumber().toString() }</li>
          )
        })}

      </ul>
    </div>
  )
}

export default Pagination
