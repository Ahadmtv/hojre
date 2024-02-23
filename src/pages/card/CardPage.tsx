import { FC, MouseEvent, useEffect, useState } from 'react'
import HeaderSecondry from '../../components/HeaderSecondry'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { onAuthStateChanged } from 'firebase/auth'
import { Auth, db } from '../../firebase/Config'
import { arrayRemove, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import { cartinfo, setLoading } from '../../Redux/authSlice'
import Loader from '../../components/loader/Loader'
import { toast } from 'react-toastify'
import persian from "persianjs"

// بررسی کاربران فعال در حال حاضر سایت و دریافت اطلاعات آن

const CardPage: FC = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.auth.isLoading)
    const [uid, setUid] = useState<string>("");
    const [cartProducts, setCartProducts] = useState<any[]>([]);
    const [userData, setUserData] = useState<any>();
    const [deleteProducts, setDeleteProducts] = useState<any>([])
    useEffect(() => {
        onAuthStateChanged(Auth, (user) => {
            if (user) {
                setUid(user.providerData[0].uid);
            }
        });
    }, []);
    ////////////////////////////////////////////////////

    // دریافت اطلاعات حساب کاربر مورد نظر /////////


    useEffect(() => {
        if (uid !== "") {
            dispatch(setLoading(true));
            const docRef = doc(db, 'users', uid);
            getDoc(docRef)
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        setUserData(docSnap.data());
                    } else {
                        console.log('No such document!');
                    }
                })
                .catch((error) => {
                    console.error('Error getting document:', error);
                });
        }

    }, [uid, deleteProducts]);

    ////////////////////////////////

    //به دست آوردن محصولات سبد خرید کاربر

    useEffect(() => {
        if (userData) {
            setCartProducts(userData.userCartProduct);
            dispatch(setLoading(false));
        }
    }, [userData]);

    /////////////////////////////////////////////////////////////

    // حذف محصول مورد نظر بعد از کلیک //////


    const deleteProduct = async (e: MouseEvent<HTMLButtonElement>, id: any) => {
        e.preventDefault();
        dispatch(setLoading(true));
        const filter = cartProducts.filter((p) => {
            return p.id === id
        })
        setDeleteProducts(filter);

    }


    useEffect(() => {
        if (deleteProducts.length > 0) {
            const removeProduct = async () => {
                const productRef = doc(db, 'users', uid);
                await updateDoc(productRef, {
                    userCartProduct: arrayRemove(deleteProducts[0])
                });
                dispatch(setLoading(false));
                toast.success("محصول از سبد حذف شد");
                //آپدیت تعداد محصولات سبد خرید
                await dispatch(cartinfo({ uid }));
            };
            removeProduct();
        }
    }, [deleteProducts]);


    //////////////////////////////////////////////////////
    return (
        <div>
            {isLoading && <Loader />}
            <Navbar />
            <HeaderSecondry />
            <div>
                <div className='container mx-auto px-1'>
                    <div className='my-6 my-shadow overflow-x-scroll'>
                        <table className="w-full border-separate text-[14px] md:text-[16px]">
                            <thead className='bg-amber-600 text-white py-3 px-2'>
                                <tr className='text-right'>
                                    <th className='py-3 pr-3'>نام محصول</th>
                                    <th className='py-3 text-center px-1'>قیمت</th>
                                    <th className='py-3 text-center px-1'>تعداد</th>
                                    <th className='py-3 text-center px-1'>رنگ</th>
                                    <th className='py-3 text-center px-1'>کل</th>
                                    <th className='py-3 text-center px-1'>حذف سفارش</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartProducts && cartProducts.map((p, i) => {
                                    return (
                                        <tr key={i} className='h-[100px] border-gray-300 border-b-2'>
                                            <td className='bg-gray-200 pr-3'>
                                                <div className='flex gap-x-4 items-center flex-col md:flex-row'>
                                                    <img className='md:w-[100px] w-[65px] py-2' src={p.image}></img>
                                                    <span className='text-center md:text-right'>{p.name}</span>
                                                </div>
                                            </td>
                                            <td className='bg-gray-200 text-center px-1'><div>{persian(p.price).englishNumber().toString()+",۰۰۰" + "تومان"}</div></td>
                                            <td className='bg-gray-200 text-center px-1'>
                                                <div>{persian(p.quantity).englishNumber().toString()}</div>
                                            </td>
                                            <td className='bg-gray-200 text-center px-1'>{p.color}</td>
                                            <td className='bg-gray-200 text-center px-1'><div>{persian(p.quantity * p.price).englishNumber().toString()+",۰۰۰" + "تومان"}</div></td>
                                            <td className='bg-gray-200 text-center px-1'>
                                                <button onClick={(e) => deleteProduct(e, p.id)} className='p-2 hover:text-red-600 transition duration-200 ease-linear'><i className="text-xl fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default CardPage
