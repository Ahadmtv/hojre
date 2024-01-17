import { FC } from "react"
import { useLocation } from "react-router-dom"
import Breadcrumb from "./Breadcrumb";

const HeaderSecondry: FC = () => {
    let location = useLocation();
    const path = decodeURIComponent(location.pathname).split('/').filter((p)=>p!=="");

    return (
        <div className="header-secondry">
            <div className="container mx-auto flex justify-center items-center h-full">
                <div >
                    <h1 className="text-center font-vazir-bold text-3xl mb-4">{path[0]}</h1>
                    <Breadcrumb path={path}/>

                </div>
            </div>
        </div>
    )
}

export default HeaderSecondry