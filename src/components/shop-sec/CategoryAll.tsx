import { FC, useState } from "react"
import { useGetProductsQuery } from "../../Redux/hojre";
import { useDispatch } from "react-redux";
import { setCurrentPage, setFilterdPro } from "../../Redux/ProductsSlice";
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
const CategoryAll: FC = () => {
    const [status, setStatus] = useState<string>("همه");
    const { data, isLoading, error } = useGetProductsQuery("products");
    const categoryList = ["همه", ...new Set(data?.map((d: any) => d.category))];
    const Dispatch = useDispatch();
    const changeCate = (val: string) => {
        if (data) {
            if (val === "همه") {
                Dispatch(setFilterdPro(data))
            } else {
                Dispatch(setFilterdPro(data.filter((d: Iproduct) => d.category.includes(val))));
            }
            Dispatch(setCurrentPage(1));
        }

    }
    return (
        <div className="my-4 p-4 my-shadow">
            <div className="flex flex-wrap gap-3">
                {categoryList.map((cate: any, i) => {
                    return (
                        <div key={i} className={`p-4 cursor-pointer whitespace-nowrap hover:bg-amber-500 duration-200 ease-linear ${status === cate ? "bg-amber-300" : "bg-gray-200"}`}
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