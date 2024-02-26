import { FC } from "react"
import { useParams } from "react-router-dom"
import GetFirestore from "../../hooks/GetFirestore";
import { useAppSelector } from "../../Redux/hooks";
import Loader from "../../components/loader/Loader";
const BlogDetails: FC = () => {
    const isLoading = useAppSelector((state) => state.auth.isLoading);

    //دریافت آیدی محصول از آدرس صفحه
    const { id } = useParams();

    //دریافت اطلاعات محصول با استفاده از آیدی 
    const { data } = GetFirestore("blogs", id);

    return (
        <div>
            {isLoading && <Loader />}
            {data &&
                <div className="bg-white rounded-md my-shadow p-6">
                    <div><img className="w-full" src={window.location.origin + data.imgUrl} alt="عکس مطلب"></img></div>
                    <div className="flex flex-col gap-y-4 mt-4">
                        <div><h2 className="text-3xl">{data.title}</h2></div>
                        <div className="flex gap-x-5">
                            <div className="flex items-center gap-x-1"><i className={`${data.metaList[0].iconName} text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{data.metaList[0].text}</span></div>
                            <div className="flex items-center gap-x-1"><i className={`${data.metaList[1].iconName} text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{data.metaList[1].text}</span></div>
                            <div className="flex items-center gap-x-1"><i className={`fa-solid fa-comment text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{data.commentCount}</span></div>
                        </div>
                        <div><p className="font-vazir-thin">{data.desc}</p></div>
                        <div className="">نقل قول</div>
                        <div>پارگراف دوم </div>
                        <div><img alt="عکس مطلب"></img></div>
                        <div>پارگراف سوم </div>
                        <div>تگ ها و شبکه های اجتماعی</div>
                    </div>
                </div>
            }
        </div>

    )
}

export default BlogDetails