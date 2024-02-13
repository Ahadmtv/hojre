import { FC, useState } from "react"
import { Link } from 'react-router-dom'
import { useAppSelector } from "../Redux/hooks";


const Navbar: FC = () => {
    const [menuToggle, setMenuToggle] = useState<boolean>(false);
    const [authToggle, setAuthToggle] = useState<boolean>(false);
    const user:any = useAppSelector((state) => state.auth.user);
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
                    {Object.keys(user).length === 0 &&
                        <div className="flex justify-between px-8 md:hidden">
                            {/* کلاس شخصی سازی شده  */}
                            <div className={` my-5 ${authToggle ? "block" : "hidden"}`}><Link className="btn-auth" to="/signin">ورود</Link></div>
                            <div className={` my-5 ${authToggle ? "block" : "hidden"}`}><Link className="btn-auth" to="/signup">ثبت نام</Link></div>
                        </div>
                    }
                    <div className="flex align-middle p-2">
                        {Object.keys(user).length === 0 &&
                            <div onClick={showAuth} className=" flex justify-center items-center md:hidden ml-3 cursor-pointer "><i className="fa-solid fa-circle-info align-middle text-4xl"></i></div>
                        }
                        {Object.keys(user).length !== 0 &&
                            <div className=" flex justify-center items-center md:hidden ml-3 cursor-pointer "><div className="rounded-full w-10 h-10 bg-gray-400"></div></div>

                        }
                    <div onClick={showMenu} className=" flex justify-center items-center lg:hidden cursor-pointer "><i className="fa-solid fa-bars align-middle text-4xl"></i></div>
                    {Object.keys(user).length === 0 &&
                        <div className=" justify-center align-middle hidden md:flex mr-4">
                            {/* کلاس شخصی سازی شده  */}
                            <div className="flex justify-center items-center"  ><Link className="btn-auth" to="/signin">ورود</Link></div>
                            <div className="flex justify-center items-center"  ><Link className="btn-auth mr-2 " to="/signup">ثبت نام</Link></div>
                        </div>
                    }
                    {Object.keys(user).length !== 0 &&
                        <div className=" justify-center align-middle hidden md:flex mr-4">
                            <div className="flex justify-center items-center"><Link to="/cart">{user.email}</Link></div>
                        </div>
                    }
                    <div className="mr-5 lg:flex justify-center items-center hidden ">
                        <ul className="flex justify-between items-center min-w-400">
                            <li className="text-center text-base "><Link className="p-2 hover:bg-gray-200 block rounded" to="/">خانه</Link></li>
                            <li className="text-center text-base "><Link className="p-2 hover:bg-gray-200 block rounded" to="/shop">فروشگاه</Link></li>
                            <li className="text-center text-base "><Link className="p-2 hover:bg-gray-200 block rounded" to="/blogs">مطالب</Link></li>
                            <li className="text-center text-base "><Link className="p-2 hover:bg-gray-200 block rounded" to="/about">درباره ما</Link></li>
                            <li className="text-center text-base "><Link className="p-2 hover:bg-gray-200 block rounded" to="/contact">تماس با ما</Link></li>
                        </ul>
                    </div>
                    <div className="mr-auto">
                        <Link to="/"><img src={`${window.location.origin}/assets/images/logo/logo.png`}></img></Link>
                    </div>
                </div>
                <div className={` w-full ${menuToggle ? "h-230" : "h-0"} transition-[height] lg:hidden`}>
                    <ul>
                        {/* کلاس شخصی سازی شده  */}
                        <li className="menu-item "><Link className="block p-2 h-full" to="/">خانه</Link></li>
                        <li className="menu-item "><Link className="block p-2 h-full" to="/shop">فروشگاه</Link></li>
                        <li className="menu-item "><Link className="block p-2 h-full" to="/blogs">مطالب</Link></li>
                        <li className="menu-item "><Link className="block p-2 h-full" to="/about">درباره ما</Link></li>
                        <li className="menu-item "><Link className="block p-2 h-full" to="/contact">تماس با ما</Link></li>
                    </ul>
                </div>
            </div>
        </header >
        </>
    )
}

export default Navbar