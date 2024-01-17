import { FC } from "react"
import { Link } from "react-router-dom";

const PopularTags: FC = () => {
    const tagsList = [
        {
            link: "#",
            text: "envato",
        },
        {
            link: "#",
            text: "themeforest",
        },
        {
            link: "#",
            text: "codecanyon",
        },
        {
            link: "#",
            text: "videohive",
        },
        {
            link: "#",
            text: "audiojungle",
        },
        {
            link: "#",
            text: "3docean",
        },
        {
            link: "#",
            text: "envato",
        },
        {
            link: "#",
            text: "themeforest",
        },
        {
            link: "#",
            text: "codecanyon",
        },
    ];
    return (
        <div className="my-shadow md:w-1/2 lg:w-auto">
            <div className="px-3 py-4"><h3 className="text-xl ">تگ های پربازدید</h3></div>
            <div className="flex flex-wrap gap-5 border-t-2 px-3 py-4">
                {tagsList.map((tag)=>{
                    return(
                        <Link className="bg-gray-200 hover:bg-amber-500 p-3  duration-150 ease-linear" to={tag.link}>{tag.text}</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default PopularTags