import { Dispatch, FC, SetStateAction, useState } from "react"
export interface Iproduct {
    "id": string;
    "category": string;
    "name": string;
    "seller": string;
    "price": number;
    "stock": number;
    "ratings": number;
    "ratingsCount": number;
    "img": string;
    "shipping": number;
    "quantity": number;
}
interface Iprops {
    data: Iproduct[]
    changeCate: Function
}
const CategoryAll: FC<Iprops> = ({ data, changeCate }) => {
    const [status, setStatus] = useState<string>("همه")
    const categoryList = ["همه", ...new Set(data.map((d) => d.category))];
    return (
        <div className="my-4 p-4 my-shadow">
            <div className="flex flex-wrap gap-3">
                {categoryList.map((cate, i) => {
                    return (
                        <div key={i} className={`p-4 cursor-pointer whitespace-nowrap hover:bg-amber-500 duration-200 ease-linear ${status===cate?"bg-amber-300":"bg-gray-200"}`}
                            onClick={() => { 
                                changeCate(cate);
                                setStatus(cate);
                                 }}
                                 >
                            {cate}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryAll