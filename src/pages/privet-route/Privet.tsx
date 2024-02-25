import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../Redux/hooks"
import Loader from "../../components/loader/Loader"
import { onAuthStateChanged } from "firebase/auth"
import { Auth, db } from "../../firebase/Config"
import { doc, getDoc } from "firebase/firestore"
import { setUser } from "../../Redux/authSlice"
interface Iprops {
    children: any
}
const Privet: FC<Iprops> = ({ children }) => {
    const dispatch=useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Subscribe to the user's auth state
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
        // Unsubscribe on unmount
        return () => unsubscribe();
    }, []);

      // If loading, show a spinner or something
  if (loading) return <Loader/>;

  // If error, show an error message or something
  if (error) return <div>Error: {error}</div>;

  // If user is authenticated, render the children component
  if (result) return children;
  

  // If user is not authenticated, redirect to sign-in page
    return (
        <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    )
}

export default Privet