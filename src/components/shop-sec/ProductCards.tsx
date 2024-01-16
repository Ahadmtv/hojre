import { FC, MouseEvent, useState } from "react"
import Ratting from "../Ratting"
import persian from "persianjs"
import { Link } from "react-router-dom"
import Tooltip from "../Tooltip"
interface Idata {
    id: string
    category: string
    name: string
    seller: string
    price: number
    stock: number
    ratings: number
    ratingsCount: number
    img: string
    shipping: number
    quantity: number
}
interface Iprops {
    data: Idata[]
}
const ProductCards: FC<Iprops> = ({ data }) => {
    const [styleGrid, setStyleGrid] = useState<boolean>(true);

    // فانکشن های مربوط با اسلاید روی عکس محصولات

    const hover = (e: MouseEvent<HTMLDivElement>) => {
        let element: any = e.currentTarget;
        element.children[1].className = "product-slide-active ";
    }
    const unhover = (e: MouseEvent<HTMLDivElement>) => {
        let element: any = e.currentTarget;
        element.children[1].className = "product-slide ";
    }
    return (
        <div>
            <div className="flex items-center py-4 px-2 mb-10 my-shadow">
                <div>نمایش 12 محصول در صفحه</div>
                <div className="mr-auto">
                    <span className="p-2 cursor-pointer" onClick={() => setStyleGrid(true)}><i className="fa-light fa-table-cells"></i></span>
                    <span className="p-2 cursor-pointer" onClick={() => setStyleGrid(false)}><i className="fa-solid fa-list-ul"></i></span>
                </div>
            </div>
            <div className={styleGrid ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" : "grid grid-cols-1 gap-5"}>
                {data.map((pro) => {
                    return (
                        <div className="my-shadow p-2" key={pro.id}>
                            <div className={styleGrid ? "" : "flex"}>
                                <div onMouseOver={(e) => hover(e)} onMouseOut={(e) => unhover(e)} className={`relative overflow-hidden ${styleGrid ? "" : "max-w-[250px]"}`}>
                                    <img src={pro.img}></img>
                                    <div className="product-slide ">
                                        <Tooltip content="مشاهده"><Link className="p-4 bg-amber-300 hover:bg-amber-400 duration-150 ease-linear flex justify-center items-center rounded-full mx-2" to="/"><i className="text-white fa-solid fa-eye"></i></Link></Tooltip>
                                        <Tooltip content="پسندیدن"><Link className="p-4 bg-amber-300 hover:bg-amber-400 duration-150 ease-linear flex justify-center items-center rounded-full mx-2" to="/"><i className="text-white fa-solid fa-heart"></i></Link></Tooltip>
                                        <Tooltip content="خرید"><Link className="p-4 bg-amber-300 hover:bg-amber-400 duration-150 ease-linear flex justify-center items-center rounded-full mx-2" to="/"><i className="text-white fa-solid fa-cart-shopping"></i></Link></Tooltip>
                                    </div>
                                </div>
                                <div className={`flex justify-center flex-col ${styleGrid ? "items-center gap-2 mt-2" : "gap-4 mr-10"}`}>
                                    <div className="text-center"><Link to="/">{pro.name}</Link></div>
                                    <div className="text-amber-300"><Ratting /></div>
                                    <div>{persian(pro.price).englishNumber().toString()}تومان</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductCards