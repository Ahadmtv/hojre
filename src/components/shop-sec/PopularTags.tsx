import { FC } from "react"
import { Link } from "react-router-dom";
import GetFirestore from "../../hooks/GetFirestore";


interface topTag{
    link: string
    text: string
}
const PopularTags: FC = () => {
    const {data}=GetFirestore("topTags");
    return (
        <div className="my-shadow md:w-1/2 lg:w-auto bg-white">
            <div className="px-3 py-4"><h3 className="text-xl ">تگ های پربازدید</h3></div>
            <div className="flex flex-wrap gap-5 border-t-2 px-3 py-4">
                {data && data.map((tag:topTag,i:number)=>{
                    return(
                        <Link key={i} className="bg-gray-200 hover:bg-amber-500 p-3  duration-150 ease-linear" to={tag.link}>{tag.text}</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default PopularTags