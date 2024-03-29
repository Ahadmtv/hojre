import { FC, MouseEvent, useState } from "react"
import Ratting from "../../components/Ratting";
import GetFirestore from "../../hooks/GetFirestore";
import { Tabs } from "antd";

interface Review {
    imgUrl: string
    imgAlt: string
    name: string
    date: string
    desc: string
}

const ReviewDescProduct: FC = () => {

    //هوک دریافت اطلاعات از دیتابیس
    const { data } = GetFirestore("productReview")
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    return (
        <div className="mt-4">
            <Tabs
            size="large"
            tabBarStyle={{fontFamily:"vazir",fontSize:"55px"}}
                defaultActiveKey="1"
                type="card"
                items={[
                    {
                        label: "توضیحات",
                        key: "1",
                        children: <div>
                            <div className="px-8 pt-8 font-vazir">
                                <p className="font-vazir-thin">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                            </div>
                            <div className="flex mt-6 p-8 flex-wrap">
                                <div className="w-full mb-10"><h3 className="text-xl px-3">مشخصات محصول</h3></div>
                                <div className="w-1/2">
                                    <ul className="grid gap-y-4 font-vazir-thin">
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                                    </ul>
                                </div>
                                <div className="w-1/2 flex md:justify-center md:items-center"><img className="mb-auto px-2 md:px-0" src={`${window.location.origin}/assets/images/shop/09.jpg`} alt="محصول"></img></div>
                            </div>
                        </div>

                    },
                    {
                        label: "نظرات",
                        key: "2",
                        children: <div>
                            <div>
                                {data && data.map((r: Review, i: number) => {
                                    return (
                                        <div key={i} className="flex gap-y-2 border-b-2 py-2">
                                            <div className="w-[15%] md:w-[10%] h-full flex px-1 "><div><img src={window.location.origin + r.imgUrl} alt={r.imgAlt}></img></div></div>
                                            <div className="w-[85%] md:w-[90%] flex flex-col gap-1">
                                                <div className="flex gap-x-1 md:gap-x-3 lg:gap-x-5 xl:gap-x-6">
                                                    <div className="whitespace-nowrap">{r.name}</div>
                                                    <div className="font-vazir-thin text-sm">{r.date}</div>
                                                    <Ratting />
                                                </div>
                                                <div className="font-vazir-thin pl-4">{r.desc}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="p-4">
                                <div className="my-4"><h3 className="text-xl">افزودن نظر</h3></div>
                                <form>
                                    <div className="flex gap-x-6 items-center">
                                        <input className="border-2 py-2 px-3" required placeholder="نام و نام خانوادگی" />
                                        <input className="border-2 py-2 px-3" required placeholder="ایمیل شما" />
                                        <div className="flex gap-x-2"><span>نظر شما</span><Ratting /></div>
                                    </div>
                                    <textarea placeholder="اینجا بنویسید ..." className="w-full border-2 p-2 my-2"></textarea><br />
                                    <button onClick={(e) => handleClick(e)} className="py-2 px-3 text-lg text-white bg-blue-600 hover:bg-blue-700 duration-150 ease-linear rounded" type='submit'>ثبت نظر</button>
                                </form>
                            </div>
                        </div>
                    }
                ]}
            />
        </div>
    )
}

export default ReviewDescProduct