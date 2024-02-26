import { FC } from "react"
import PopularPosts from "../../components/shop-sec/PopularPosts"
import HeaderSecondry from "../../components/HeaderSecondry"
import PopularTags from "../../components/shop-sec/PopularTags"
import ProductDetails from "../../components/single-sec/ProductDetails"
import ReviewDescProduct from "./ReviewDescProduct"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const SingleProduct: FC = () => {
    return (
        <div>
            <Navbar />
            <HeaderSecondry />
            <div>
                <div className="container mx-auto">
                    <div className="flex flex-col-reverse lg:flex-row my-16 gap-x-6">
                        <div className="w-full lg:w-[65%]">
                            <ProductDetails />
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
            <Footer />

        </div>
    )
}

export default SingleProduct