import { FC } from "react"
import { Link } from "react-router-dom"

const AplicationHome: FC = () => {
    return (
        <div className="pb-20">
            <div className="container mx-auto flex justify-center items-center">
                <div className="w-[80%] lg:w-[50%] flex flex-col justify-center items-center gap-10 ">
                    <div>
                        <Link className=" text-center inline-block hover:-translate-y-1 text-2xl bg-transparent hover:bg-amber-300 duration-200 ease-linear px-8 py-2 rounded-lg border-amber-300 border" to="/">رایگان ثبت نام کنید</Link>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl my-3">هرزمان ، هرجا خرید کنید</h3>
                        <p className="font-vazir-thin text-lg text-center"> از طریق لینک های زیر اپلیکیشن مارا دانلود کنید و از خرید خود لذت ببرید همچنین در قرعه کشی بزرگ آخر سال شرکت کنید و شانس خود را امتحان کتید</p>
                    </div>
                    <div className="flex gap-10">
                        <Link to="/"><img src="./assets/images/app/01.jpg"></img></Link>
                        <Link to="/"><img src="./assets/images/app/02.jpg"></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AplicationHome