import { FormEvent, useEffect, useState } from "react";
import { signUp } from "../../Redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hooks";
import { toast } from "react-toastify";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/Config";

const SignUp = () => {
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const result: any = await dispatch(signUp({ email, password }));
        if (result.error) {
          switch (result.error.message) {
            case "Firebase: Error (auth/invalid-email).":
              toast.error("ایمیل معتبر وارد کنید")
              break;
            case "Firebase: Password should be at least 6 characters (auth/weak-password).":
              toast.error("رمز عبور باید حداقل 6 کاراکتر باشد")
              break;
            case "Firebase: Error (auth/email-already-in-use).":
              toast.error("این ایمیل قبلا استفاده شده است")
              break;
            default:
              break;
          }
        } else {
          navigate("/");
          toast.success("ثبت نام با موفقیت انجام شد");

          // ارسال مشخصات یوزر به دیتابیس 

          let userData = JSON.parse(JSON.stringify(result.payload.providerData[0]));
          const docRef = await setDoc(doc(db, "users", result.payload.providerData[0].uid), {
            ...userData
          });

          /////////////////////////////////
        }
      } catch (error) {
        toast.error("خطایی رخ داده است");
      }
    } else {
      toast.error("رمز عبور با تایید رمز عبور مطابقت ندارد");
    }
  }
  return (
    <div className="bg-orange-50">
      <div className="container mx-auto h-[100vh] flex justify-center items-center">
        <div className=" py-10 px-[120px] my-shadow min-w-[550px] bg-white">
          <div>
            <div><h1 className="text-center font-vazir-bold text-3xl font-bold">ثبت نام</h1></div>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-y-2 mt-6">
              <input className="border-2 py-2 px-2 rounded-md" type="text" placeholder="نام و نام خانوادگی" name="fullName" onChange={(e) => setFullname(e.target.value)} required />
              <input className="border-2 py-2 px-2 rounded-md" type="text" placeholder="ایمیل" name="email" onChange={(e) => setEmail(e.target.value)} required />
              <input className="border-2 py-2 px-2 rounded-md" type="password" placeholder="رمز عبور" name="password" onChange={(e) => setPassword(e.target.value)} required />
              <input className="border-2 py-2 px-2 rounded-md" type="password" placeholder="تایید رمز عبور" name="confirmPass" onChange={(e) => setConfirmPassword(e.target.value)} required />
              <button className="inline-block w-full bg-orange-600 text-white p-2 text-center rounded mt-5" type="submit">ثبت نام</button>
            </form>
            <div>
              <div className="flex flex-col justify-center items-center gap-y-4 mt-8">
                <Link className="font-vazir-thin text-gray-800" to="/signin">قبلا ثبت نام کرده اید؟ وارد شوید</Link>
                <div className="relative w-[30px] h-[30px]">
                  <div className="bg-orange-600 rounded-full absolute top-0 right-0 text-white w-[30px] h-[30px] z-10 flex justify-center items-center">یا</div>
                  <div className="bg-orange-600 rounded-full absolute top-0 right-0 w-[30px] h-[30px] animate-ping"></div>
                </div>
                <h3>با شبکه های اجتماعی وارد شوید</h3>
                <div className='flex gap-1'>
                  {socialList.map((item, i) => {
                    return (
                      <Link to={item.siteLink} key={i} className={`${item.className} w-[35px] h-[35px] flex justify-center items-center rounded-full hover:-translate-y-1 duration-200 ease-linear text-white`}><i className={`${item.iconName}`}></i></Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp

