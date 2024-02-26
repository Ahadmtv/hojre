import { FC, MouseEvent, useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import persian from "persianjs"
import { signOut } from "firebase/auth";
import { Auth } from "../firebase/Config";
import { toast } from "react-toastify";
import { setLoading, setUser } from "../Redux/authSlice";
import Loader from "./loader/Loader";


const Navbar: FC = () => {
    const user: any = useAppSelector((state) => state.auth.user);
    const productCart = useAppSelector((state) => state.auth.productCart);
    const [cartNum, setCartNum] = useState<number>(0);
    const [profileSlide, setProfileSlide] = useState<boolean>(false);
    const [menuToggle, setMenuToggle] = useState<boolean>(false);
    const [authToggle, setAuthToggle] = useState<boolean>(false);
    const isLoading = useAppSelector((state) => state.auth.isLoading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    //دریافت لحظه ای مقدار سبد خرید کاربر

    useEffect(() => {
            if (Object.keys(productCart)) {
                setCartNum(Object.keys(productCart).length);
            } else {
                setCartNum(0);
            }
    }, [productCart]);

    // نمایش منو ها در حالت نمایش موبایل 
    const showMenu = () => {
        setMenuToggle(!menuToggle);
    }
    const showAuth = () => {
        setAuthToggle(!authToggle);
    }

    //انجام تابع خروج کاربر
    const handleExit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate("/");
        dispatch(setLoading(true));
        signOut(Auth)
            .then(() => {
                toast.success("خارج شدید");
                dispatch(setUser({}));
                dispatch(setLoading(false));
            })
            .catch(() => {
                toast.error("خطایی رخ داده است");
                dispatch(setLoading(false));
            })
    }
    return (
        <>
            {isLoading && <Loader />}
            <header className=" w-full fixed backdrop-blur-2xl z-30 bg-white bg-opacity-40">
                <div className="container mx-auto bg-transparent">
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
                        <div onClick={showMenu} className=" flex justify-center items-center lg:hidden cursor-pointer "><i className="fa-solid fa-bars align-middle text-4xl"></i></div>
                        {Object.keys(user).length !== 0 &&
                            <div className=" flex justify-center items-center md:hidden ml-3 cursor-pointer ">
                                <div className=" justify-center align-middle flex mx-4">
                                    <div className="flex justify-center items-center relative">
                                        <div className="cursor-pointer" onClick={() => setProfileSlide(!profileSlide)}>
                                            <div className="rounded-full border-[3px] border-amber-300"><img className="rounded-full w-14 h-14" src={`${user.photoURL ? user.photoURL : window.location.origin + "/assets/images/clients/avater.png"}`} alt="پروفایل"></img></div>
                                            <div className="bg-red-600 p-2 rounded-full absolute left-0 text-sm w-1 h-1 flex justify-center items-center bottom-[6px] text-white">{cartNum === 0 ? "0" : persian(cartNum).englishNumber().toString()}</div>
                                        </div>
                                        <ul className={`${profileSlide ? "flex" : "hidden"} absolute bottom-[-120px] right-[10px] bg-white rounded-tl-lg flex-col w-[150px] border-2`}>
                                            <li className="border-b-2 
                                        block px-3 py-2 hover:bg-gray-100 duration-100 ease-linear transition-all cursor-pointer"><Link className="flex gap-x-3" to="/profile"><i className="fa-solid fa-user"></i><span className="text-sm whitespace-nowrap">پروفایل</span></Link></li>
                                            <li className="border-b-2 block px-3 py-2 hover:bg-gray-100 duration-100 ease-linear transition-all cursor-pointer"><Link className="flex gap-x-3" to="/cart"><i className="fa-solid fa-bag-shopping"></i><span className="text-sm whitespace-nowrap">سبد خرید</span></Link></li>
                                            <li className="border-b-2 block px-3 py-2 hover:bg-gray-100 duration-100 ease-linear transition-all cursor-pointer"><button onClick={(e) => handleExit(e)} className="flex gap-x-3"><i className="fa-solid fa-right-from-bracket"></i><span className="text-sm whitespace-nowrap">خروج</span></button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        }
                        {Object.keys(user).length === 0 &&
                            <div className=" justify-center align-middle hidden md:flex mr-4">
                                {/* کلاس شخصی سازی شده  */}
                                <div className="flex justify-center items-center"  ><Link className="btn-auth" to="/signin">ورود</Link></div>
                                <div className="flex justify-center items-center"  ><Link className="btn-auth mr-2 " to="/signup">ثبت نام</Link></div>
                            </div>
                        }
                        {Object.keys(user).length !== 0 &&
                            <div className=" justify-center align-middle hidden md:flex mx-4">
                                <div className="flex justify-center items-center relative">
                                    <div className="cursor-pointer" onClick={() => setProfileSlide(!profileSlide)}>
                                        <div className="rounded-full border-[3px] border-amber-300"><img className="rounded-full w-14 h-14" src={`${user.photoURL ? user.photoURL : window.location.origin + "/assets/images/clients/avater.png"}`} alt="پروفایل"></img></div>
                                        <div className="bg-red-600 p-2 rounded-full absolute left-0 text-sm w-1 h-1 flex justify-center items-center bottom-[6px] text-white">{cartNum === 0 ? "0" : persian(cartNum).englishNumber().toString()}</div>
                                    </div>
                                    <ul className={`${profileSlide ? "flex" : "hidden"} absolute bottom-[-120px] right-[10px] bg-white rounded-tl-lg flex-col w-[150px] border-2`}>
                                        <li className="border-b-2 
                                        block px-3 py-2 hover:bg-gray-100 duration-100 ease-linear transition-all cursor-pointer"><Link className="flex gap-x-3" to="/profile"><i className="fa-solid fa-bag-shopping"></i><span className="text-sm whitespace-nowrap">پروفایل</span></Link></li>
                                        <li className="border-b-2 block px-3 py-2 hover:bg-gray-100 duration-100 ease-linear transition-all cursor-pointer"><Link className="flex gap-x-3" to="/cart"><i className="fa-solid fa-user"></i><span className="text-sm whitespace-nowrap">سبد خرید</span></Link></li>
                                        <li className="border-b-2 block px-3 py-2 hover:bg-gray-100 duration-100 ease-linear transition-all cursor-pointer"><button onClick={(e) => handleExit(e)} className="flex gap-x-3"><i className="fa-solid fa-right-from-bracket"></i><span className="text-sm whitespace-nowrap">خروج</span></button></li>
                                    </ul>
                                </div>
                            </div>
                        }
                        <div className="mr-5 lg:flex justify-center items-center hidden ">
                            <ul className="flex justify-between items-center min-w-400">
                                <li className="text-center text-base "><Link className="p-2 hover:bg-amber-200 block rounded-lg" to="/">خانه</Link></li>
                                <li className="text-center text-base "><Link className="p-2 hover:bg-amber-200 block rounded-lg" to="/shop">فروشگاه</Link></li>
                                <li className="text-center text-base "><Link className="p-2 hover:bg-amber-200 block rounded-lg" to="/blogs">مطالب</Link></li>
                                <li className="text-center text-base "><Link className="p-2 hover:bg-amber-200 block rounded-lg" to="/about">درباره ما</Link></li>
                                <li className="text-center text-base "><Link className="p-2 hover:bg-amber-200 block rounded-lg" to="/contact">تماس با ما</Link></li>
                            </ul>
                        </div>
                        <div className="mr-auto">
                            <Link to="/"><img className="max-w-[200px]" src={`${window.location.origin}/assets/images/logo/logo.png`} alt="logo"></img></Link>
                        </div>
                    </div>
                    <div >
                        <ul className={` w-full ${menuToggle ? "h-230" : "h-0"} transition-[height] lg:hidden overflow-hidden`}>
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
