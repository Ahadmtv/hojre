import { FC } from "react"
import { useParams } from "react-router-dom"
import { useGetSingleBlogQuery } from "../../Redux/hojre"
const BlogDetails: FC = () => {
    const { id } = useParams();
    console.log(id);
    const { data, isLoading, error } = useGetSingleBlogQuery(id);
    return (
        <div>
            {error && <div>خطا</div>}
            {isLoading && <div> صبر کنید ...</div>}
            {data &&
                <div>
                    <div><img className="w-full" src={window.location.origin + data.imgUrl}></img></div>
                    <div>
                        <div><h2 className="text-3xl">{data.title}</h2></div>
                        <div className="flex gap-x-5">
                            <div className="flex items-center gap-x-1"><i className={`${data.metaList[0].iconName} text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{data.metaList[0].text}</span></div>
                            <div className="flex items-center gap-x-1"><i className={`${data.metaList[1].iconName} text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{data.metaList[1].text}</span></div>
                            <div className="flex items-center gap-x-1"><i className={`fa-solid fa-comment text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{data.commentCount}</span></div>
                        </div>
                        <div><p className="font-vazir-thin">{data.desc}</p></div>
                        <div className="">نقل قول</div>
                        <div>پارگراف دوم </div>
                        <div><img></img></div>
                        <div>پارگراف سوم </div>
                        <div>تگ ها و شبکه های اجتماعی</div>
                    </div>
                </div>
            }
        </div>

    )
}

export default BlogDetails