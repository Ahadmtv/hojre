import { FC } from "react"
import { useParams } from "react-router-dom"
import PopularPosts from "./PopularPosts"
import PopularTags from "./PopularTags"
import HeaderSecondry from "../HeaderSecondry"

const SingleProduct: FC = () => {
    return (
        <div>
        <HeaderSecondry />
        <div>
          <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row my-16 gap-x-6">
              <div className="w-full lg:w-[65%]"></div>
              <div className="w-full lg:w-[35%]">
                <div className="hidden lg:flex flex-col gap-5"><PopularPosts/>
                <PopularTags/>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden flex-col md:flex-row gap-5"><PopularPosts/>
            <PopularTags/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SingleProduct