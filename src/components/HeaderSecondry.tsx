import { FC } from "react"
import { useLocation } from "react-router-dom"
import Breadcrumb from "./Breadcrumb";

const HeaderSecondry: FC = () => {
    let location = useLocation();

    //هرصفحه به صورت یک عضو از آرایه ذخیره می شود
    const path = decodeURIComponent(location.pathname).split('/').filter((p) => p !== "");

    //فارسی سازی آدرس برای نشان دادن ردپای کاربر
    switch (path[0]) {
        case "shop": path[0] = "فروشگاه"
            break;
        case "blogs": path[0] = "مطالب"
            break;
        case "about": path[0] = "درباره ما"
            break;
        case "contact": path[0] = "ارتباط با ما"
            break;
        case "cart": path[0] = "سبد خرید"
            break;
        case "profile": path[0] = "حساب کاربری"
            break;
        default:
            break;
    }
    if (path.length === 2 && path[0] === "فروشگاه") {
        path[1] = "نمایش محصول"
    }
    if (path.length === 2 && path[0] === "مطالب") {
        path[1] = "نمایش مطلب"
    }
    return (
        <div className="header-secondry">
            <div className="container mx-auto flex justify-center items-center h-full">
                <div >
                    <h1 className="text-center font-vazir-bold text-3xl mb-4">{path[path.length - 1]}</h1>
                    <Breadcrumb path={path} />

                </div>
            </div>
        </div>
    )
}

export default HeaderSecondry