import { FC, useEffect, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"
import Loader from "../../components/loader/Loader"
import { onAuthStateChanged } from "firebase/auth"
import { Auth } from "../../firebase/Config"

interface Iprops {
    children: any
}

// تابع تایید آنلاین بودن کاربر برای استفاده از از برخی آدرس ها
const Privet: FC<Iprops> = ({ children }) => {
    const location = useLocation();
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // بررسی کاربران آنلاین
        const unsubscribe = onAuthStateChanged(
            Auth,
            (currentUser:any) => {
                setResult(currentUser);
                setLoading(false);
            },
            (error:any) => {
                setError(error);
                setLoading(false);
            }
        );
       // آنسابسکرایب کردن 
        return () => unsubscribe();
    }, []);

 
  if (loading) return <Loader/>;

  if (error) return <div>Error: {error}</div>;

  if (result) return children;

    return (
        <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    )
}

export default Privet