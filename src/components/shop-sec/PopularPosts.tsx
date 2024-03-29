import { FC } from "react"
import { Link } from "react-router-dom"
import GetFirestore from "../../hooks/GetFirestore"

interface topPost{
    id: string
    imgUrl: string
    imgAlt:string
    title: string
    date: string
}
const PopularPosts: FC = () => {

    //هوک دریافت اطلاعات از دیتابیس
    const {data}=GetFirestore("topPosts");
    return (
        <div className="my-shadow md:w-1/2 lg:w-auto bg-white">
            <h3 className="px-3 text-xl py-3">مطالب پربازدید</h3>
            <div className="flex flex-wrap ">
                {data && data.map((post:topPost) => {
                    return (
                        <div key={post.id} className="flex gap-x-2 w-full border-t-2 py-4 px-3" >
                            <div className="w-[30%]"><img className="w-full h-full object-cover" src={window.location.origin + post.imgUrl} alt={post.imgAlt}></img></div>
                            <div className="flex flex-col justify-between w-[70%]">
                                <Link className="" to={`/blogs/${post.id}`}>{post.title}</Link>
                                <p className="font-vazir-thin">{post.date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PopularPosts