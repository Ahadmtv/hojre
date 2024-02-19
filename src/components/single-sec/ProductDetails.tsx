import { FC, MouseEvent, useEffect, useState } from "react"
import { Iproduct } from "../shop-sec/CategoryAll"
import Ratting from "../Ratting"
import Quantity from "./Quantity"
import persian from "persianjs"
import { useGetSingleProductQuery } from "../../Redux/hojre"
import { useNavigate, useParams } from "react-router-dom"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { Auth, db } from "../../firebase/Config"
import { onAuthStateChanged } from "firebase/auth"
import { toast } from "react-toastify"
import Loader from "../loader/Loader"
import { useAppDispatch, useAppSelector } from "../../Redux/hooks"
import { cartinfo, setLoading } from "../../Redux/authSlice"
import GetFirestore from "../../hooks/GetFirestore"

interface Iprops {
    product: Iproduct[]
}
const ProductDetails: FC = () => {
    const { id } = useParams<(string)>();
    const isLoading = useAppSelector((state) => state.auth.isLoading);
    const isLoadingB = useAppSelector((state) => state.auth.isLoading);
    const dispatch = useAppDispatch();
    const {data} = GetFirestore("products",id);
    const navigate = useNavigate();
    const [color, setColor] = useState<string>("");
    const [size, setSize] = useState<string>("");
    const [copon, setCopon] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);

    let uid: string = ""
    let userData: any

    onAuthStateChanged(Auth, (user) => {
        if (user) {
            uid = user.providerData[0].uid;
            const docRef = doc(db, 'users', uid);
            getDoc(docRef)
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        userData = docSnap.data()
                    } else {
                        console.log('No such document!');
                    }
                })
                .catch((error) => {
                    console.error('Error getting document:', error);
                });

        }
    });




    // تابع اضافه به سبد خرید 

    const handleAdd = async (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(setLoading(true));
        e.preventDefault();
        if (uid) {
            const userRef = doc(db, "users", uid);
            if (userData.userCartProduct) {
                await updateDoc(userRef, {
                    userCartProduct: [
                        ...userData.userCartProduct,
                        {
                            id: id,
                            name: data.name,
                            image: data.img,
                            price: data.price,
                            color: color,
                            quantity: quantity
                        }
                    ]
                });
                toast.success("به سبد خرید اضافه شد");
                dispatch(setLoading(false));
                //آپدیت تعداد محصولات سبد خرید
                await dispatch(cartinfo({ uid }));
            } else {
                await updateDoc(userRef, {
                    userCartProduct: [
                        {
                            id: id,
                            name: data.name,
                            image: data.img,
                            price: data.price,
                            color: color,
                            quantity: quantity
                        }
                    ]
                });
                toast.success("به سبد خرید اضافه شد");
                dispatch(setLoading(false));
                //آپدیت تعداد محصولات سبد خرید
                await dispatch(cartinfo({ uid }));
            }
        } else {
            navigate("/signup");
            dispatch(setLoading(false));
        }


    }
    // تابع نشان دادن صورت حساب
    const handleCheck = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }
    return (
        <div className="my-shadow p-4 rounded-md">
            {isLoading && <Loader />}
            {isLoadingB && <Loader />}
            {data &&
                <div className="flex flex-col md:flex-row">
                    <div className="iamge w-full md:w-1/2">
                        <div><img src={data.img} alt={data.name}></img></div>
                    </div>
                    <div className="details w-full md:w-1/2">
                        <div className="flex flex-col gap-4 pr-4 h-full mt-4 md:mt-0">
                            <div>
                                <h3 className="text-2xl font-bold">{data.name}</h3>
                                <Ratting /><span className="font-vazir-thin">{data.ratingsCount} نظر</span>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <p className="text-2xl">{persian(data.price).englishNumber().toString()}تومان</p>
                                <p className="">{data.seller}</p>
                                <p className="font-vazir-thin">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد </p>
                            </div>

                            {/* فرم مربوط به دریافت اطلاعات محصول */}

                            <form className="flex flex-col gap-y-6 mt-auto">
                                <div className="flex items-center gap-x-4">
                                    {/* سایز محصول */}
                                    <select value={size} onChange={(e) => setSize(e.target.value)} className="py-2 px-5" >
                                        <option>انتخاب سایز</option>
                                        <option>sm</option>
                                        <option>md</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>2XL</option>
                                    </select>
                                    {/* رنگ محصول */}
                                    <select value={color} onChange={(e) => setColor(e.target.value)} className="py-2 px-5" >
                                        <option>انتخاب رنگ</option>
                                        <option>قرمز</option>
                                        <option>بنفش</option>
                                        <option>آبی</option>
                                        <option>زرد</option>
                                        <option>یاسی</option>
                                    </select>
                                </div>
                                {/* تعداد و کد تخفیف */}
                                <div className="flex gap-x-4">
                                    <div className="max-w-[100px]"><Quantity quantity={quantity} setQuantity={setQuantity} stock={data.stock} /></div>
                                    <div><input value={copon} onChange={(e) => setCopon(e.target.value)} className="border-2 h-full rounded" type="text" placeholder="کد تخفیف" /></div>
                                </div>
                                {/* قسمت دکمه ها */}
                                <div className="flex gap-x-4 items-center">
                                    <button onClick={(e) => handleAdd(e)} className="py-2 px-3 text-lg text-white bg-amber-400 hover:bg-amber-500 duration-150 ease-linear rounded">افزودن به سبد</button>
                                    <button onClick={(e) => handleCheck(e)} className="py-2 px-3 text-lg text-white bg-blue-600 hover:bg-blue-700 duration-150 ease-linear rounded">صورت حساب</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default ProductDetails