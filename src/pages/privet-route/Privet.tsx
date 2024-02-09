import { FC } from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
interface Iprops {
    children: any
}
const Privet: FC<Iprops> = ({ children }) => {
const location=useLocation();
    const user : any = useSelector<any>((state) => state.auth.user);
    if (Object.keys(user).length!==0) {
        return children
    }
    return(
        <Navigate to="/signin" state={{from :location}} replace></Navigate>
    )
}

export default Privet