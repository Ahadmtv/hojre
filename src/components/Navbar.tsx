import { FC, useState } from "react"
import { Link } from 'react-router-dom'


const Navbar: FC = () => {
    const [menuToggle, setMenuToggle] = useState<boolean>(false);
    const [authToggle, setAuthToggle] = useState<boolean>(false);
    const showMenu = () => {
        setMenuToggle(!menuToggle);
    }
    const showAuth = () => {
        setAuthToggle(!authToggle);
    }
    return (
        <>
            <header className="absolute top-0 w-full">
                <div className="container mx-auto bg-transparent overflow-hidden">
                    <div className="flex justify-between px-8 md:hidden">
                        {/* کلاس شخصی سازی شده  */}
                        <div className={` my-5 ${authToggle ? "block" : "hidden"}`}><Link className="btn-auth" to="">ورود</Link></div>
                        <div className={` my-5 ${authToggle ? "block" : "hidden"}`}><Link className="btn-auth" to="">ثبت نام</Link></div>
                    </div>
                    <div className="flex align-middle p-2">
                        <div onClick={showAuth} className=" flex justify-center items-center md:hidden ml-3 cursor-pointer "><i className="fa-solid fa-circle-info align-middle text-4xl"></i></div>
                        <div onClick={showMenu} className=" flex justify-center items-center lg:hidden cursor-pointer "><i className="fa-solid fa-bars align-middle text-4xl"></i></div>
                        <div className=" justify-center align-middle hidden md:flex mr-4">
                            {/* کلاس شخصی سازی شده  */}
                            <div className="flex justify-center items-center"  ><Link className="btn-auth" to="">ورود</Link></div>
                            <div className="flex justify-center items-center"  ><Link className="btn-auth mr-2 " to="">ثبت نام</Link></div>
                        </div>
                        <div className="mr-5 lg:flex justify-center items-center hidden ">
                        <ul className="flex justify-between items-center min-w-400">
                            <li className="text-center text-base "><Link className="p-2 hover:bg-gray-200 block rounded" to="/">خانه</Link></li>
                            <li className="text-center text-base "><Link className="p-2 hover:bg-gray-200 block rounded" to="/فروشگاه">فروشگاه</Link></li>
                            <li className="text-center text-base "><Link className="p-2 hover:bg-gray-200 block rounded" to="/مطالب">مطالب</Link></li>
                            <li className="text-center text-base "><Link className="p-2 hover:bg-gray-200 block rounded" to="/درباره ما">درباره ما</Link></li>
                            <li className="text-center text-base "><Link className="p-2 hover:bg-gray-200 block rounded" to="ارتباط با ما">تماس با ما</Link></li>
                        </ul>
                    </div>
                        <div className="mr-auto">
                            <Link to="/"><img src="./assets/images/logo/logo.png"></img></Link>
                        </div>
                    </div>
                    <div className={` w-full ${menuToggle ? "h-230" : "h-0"} transition-[height] lg:hidden`}>
                        <ul>
                            {/* کلاس شخصی سازی شده  */}
                            <li className="menu-item "><Link className="block p-2 h-full" to="/">خانه</Link></li>
                            <li className="menu-item "><Link className="block p-2 h-full" to="/فروشگاه">فروشگاه</Link></li>
                            <li className="menu-item "><Link className="block p-2 h-full" to="/مطالب">مطالب</Link></li>
                            <li className="menu-item "><Link className="block p-2 h-full" to="/درباره ما">درباره ما</Link></li>
                            <li className="menu-item "><Link className="block p-2 h-full" to="ارتباط با ما">تماس با ما</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar