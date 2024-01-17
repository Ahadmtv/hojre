import { FC } from "react"
import { Link } from "react-router-dom"


const PopularPosts: FC = () => {
    const postList = [
        {
            id: 1,
            imgUrl: './assets/images/blog/10.jpg',
            imgAlt: 'rajibraj91',
            title: 'چند نکته ای که در خرید عطر باید رعایت کنید',
            date: '17 خرداد 1402',
        },
        {
            id: 2,
            imgUrl: './assets/images/blog/11.jpg',
            imgAlt: 'rajibraj91',
            title: 'چند نکته ای که در خرید عطر باید رعایت کنید',
            date: '17 خرداد 1402',
        },
        {
            id: 3,
            imgUrl: './assets/images/blog/12.jpg',
            imgAlt: 'rajibraj91',
            title: 'چند نکته ای که در خرید عطر باید رعایت کنید',
            date: '17 خرداد 1402',
        },
        {
            id: 4,
            imgUrl: './assets/images/blog/09.jpg',
            imgAlt: 'rajibraj91',
            title: 'چند نکته ای که در خرید عطر باید رعایت کنید',
            date: '17 خرداد 1402',
        },
    ]

    return (
        <div className="my-shadow md:w-1/2 lg:w-auto">
            <h3 className="px-3 text-xl py-3">مطالب پربازدید</h3>
            <div className="flex flex-wrap ">
                {postList.map((post) => {
                    return (
                        <div key={post.id} className="flex gap-x-2 w-full border-t-2 py-4 px-3" >
                            <div className="w-[30%]"><img className="w-full h-full object-cover " src={post.imgUrl} alt={post.imgAlt}></img></div>
                            <div className="flex flex-col justify-between w-[70%]">
                                <Link className="" to={`/blog/${post.id}`}>{post.title}</Link>
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