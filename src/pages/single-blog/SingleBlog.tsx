import { FC } from "react"
import HeaderSecondry from "../../components/HeaderSecondry"
import PopularPosts from "../../components/shop-sec/PopularPosts"
import PopularTags from "../../components/shop-sec/PopularTags"
import BlogDetails from "./BlogDetails"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const SingleBlog: FC = () => {
    return (
        <div>
            <Navbar />
            <HeaderSecondry />
            <div className="bg-orange-50">
                <div className="container mx-auto">
                    <div className="flex flex-col-reverse lg:flex-row py-16 gap-x-6">
                        <div className="w-full lg:w-[65%]">
                            <BlogDetails/>
                            
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

export default SingleBlog