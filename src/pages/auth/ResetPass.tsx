import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetPass } from "../../Redux/authSlice";

const ResetPass = () => {
    const socialList = [
        {
            iconName: 'fa-brands fa-facebook-f',
            siteLink: '#',
            className: 'facebook',
        },
        {
            iconName: 'fa-brands fa-twitter',
            siteLink: '#',
            className: 'twitter',
        },
        {
            iconName: 'fa-brands fa-linkedin-in',
            siteLink: '#',
            className: 'linkedin',
        },
        {
            iconName: 'fa-brands fa-instagram',
            siteLink: '#',
            className: 'instagram',
        },
        {
            iconName: 'fa-brands fa-pinterest-p',
            siteLink: '#',
            className: 'pinterest',
        },
    ]
    const dispatch = useDispatch<any>();
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
    const reset = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await dispatch(resetPass({ email }));
            navigate("/signin")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="bg-orange-50">
            <div className="container mx-auto h-[100vh] flex justify-center items-center">
                <div className=" py-10 px-[120px] my-shadow min-w-[550px] bg-white">
                    <div>
                        <div><h1 className="text-center font-vazir-bold text-3xl font-bold">بازیابی کلمه عبور</h1></div>
                        <form onSubmit={(e) => reset(e)} className="flex flex-col gap-y-2 mt-6">
                            <input className="border-2 py-2 px-2 rounded-md" type="text" placeholder="ایمیل" name="email" onChange={(e) => setEmail(e.target.value)} required />
                            <button className="inline-block w-full bg-orange-600 text-white p-2 text-center rounded mt-5" type="submit">بازیابی کلمه عبور</button>
                        </form>
                        <div>
                            <div className="flex flex-col justify-center items-center gap-y-4 mt-8">
                                <Link className="font-vazir-thin text-gray-800" to="/signin">بازگشت به صفحه ورود</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPass