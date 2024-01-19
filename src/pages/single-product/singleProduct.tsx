import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PopularPosts from "../../components/shop-sec/PopularPosts"
import HeaderSecondry from "../../components/HeaderSecondry"
import PopularTags from "../../components/shop-sec/PopularTags"
import data from "../../products.json"
import { Iproduct } from "../../components/shop-sec/CategoryAll"
import ProductDetails from "../../components/single-sec/ProductDetails"
import ReviewDescProduct from "./ReviewDescProduct"


const SingleProduct: FC = () => {
    const { id } = useParams<(string)>();
    const [product, setProduct] = useState<Iproduct[]>([]);
    // انتخاب محصول با استفاده از آیدی آن
    useEffect(()=>{setProduct(data.filter((product) => product.id === id))},[id]);
    return (
        <div>
            <HeaderSecondry />
            <div>
                <div className="container mx-auto">
                    <div className="flex flex-col-reverse lg:flex-row my-16 gap-x-6">
                        {/* ارسال محصول به کامپوننت  */}
                        <div className="w-full lg:w-[65%]">
                            <ProductDetails product={product} />
                            <ReviewDescProduct/>
                            </div>
                        <div className="w-full lg:w-[35%]">
                            <div className="hidden lg:flex flex-col gap-5">
                                <PopularPosts />
                                <PopularTags />
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden flex-col md:flex-row gap-5">
                        <PopularPosts />
                        <PopularTags />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct