import { FC } from "react"
interface MetaList {
    iconName: string
    text: string
}
interface Iblog {
    id: number
    imgUrl: string
    imgAlt: string
    title: string
    desc: string
    commentCount: string
    btnText: string
    metaList: MetaList[]
}
interface Iprops {
    blog: Iblog[]
}
const BlogDetails: FC<Iprops> = ({ blog }) => {
    return (
        <div>
            <div><img className="w-full" src={window.location.origin + blog[0].imgUrl}></img></div>
            <div>
                <div><h2 className="text-3xl">{blog[0].title}</h2></div>
                <div className="flex gap-x-5">
                    <div className="flex items-center gap-x-1"><i className={`${blog[0].metaList[0].iconName} text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{blog[0].metaList[0].text}</span></div>
                    <div className="flex items-center gap-x-1"><i className={`${blog[0].metaList[1].iconName} text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{blog[0].metaList[1].text}</span></div>
                    <div className="flex items-center gap-x-1"><i className={`fa-solid fa-comment text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{blog[0].commentCount}</span></div>
                </div>
                <div><p className="font-vazir-thin">{blog[0].desc}</p></div>
                <div className="">نقل قول</div>
                <div>پارگراف دوم </div>
                <div><img></img></div>
                <div>پارگراف سوم </div>
                <div>تگ ها و شبکه های اجتماعی</div>
            </div>
        </div>
    )
}

export default BlogDetails