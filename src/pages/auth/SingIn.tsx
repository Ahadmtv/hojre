import { FormEvent, useState } from 'react'
import { cartinfo, signIn } from '../../Redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';
const SingIn = () => {
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
  const isLoading=useAppSelector((state)=>state.auth.isLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useAppSelector((state)=>state.auth.user);
  
  const goIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result: any = await dispatch(signIn({ email, password }));
      if (result.error) {
        toast.error("نام کاربری یا رمز عبور صحیح نمی باشد");
      } else {
        navigate("/");
        toast.success("با موفقیت وارد شدید ");
      }
    } catch (error) {
      toast.error("خطایی رخ داده دوباره تلاش کنید");
    }
  }
  return (
    <div className="bg-orange-50">
      {isLoading && <Loader/>}
      <div className="container mx-auto h-[100vh] flex justify-center items-center">
        <div className=" py-10 px-[120px] my-shadow min-w-[550px] bg-white">
          <div>
            <div><h1 className="text-center font-vazir-bold text-3xl font-bold">ورود به حساب</h1></div>
            <form onSubmit={(e) => goIn(e)} className="flex flex-col gap-y-2 mt-6">
              <input className="border-2 py-2 px-2 rounded-md" type="text" placeholder="ایمیل" name="email" onChange={(e) => setEmail(e.target.value)} required />
              <input className="border-2 py-2 px-2 rounded-md" type="password" placeholder="رمز عبور" name="password" onChange={(e) => setPassword(e.target.value)} required />
              <Link className="font-vazir-thin text-gray-800" to="/resetpass">فراموشی رمز عبور</Link>
              <button className="inline-block w-full bg-orange-600 text-white p-2 text-center rounded mt-5" type="submit">ورود</button>
            </form>
            <div>
              <div className="flex flex-col justify-center items-center gap-y-4 mt-8">
                <Link className="font-vazir-thin text-gray-800" to="/signup">هنوز ثبت نام نکردی؟ ثبت نام کن</Link>
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

export default SingIn


{/* <div className="register flex justify-center items-center">
<div className="register-container">
  <div className="main">
    <form onSubmit={(e) => goIn(e)}>
        <h2>ثبت نام</h2>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="نام کاربری" /><br />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="گذرواژه" /><br />
        <input type="password" placeholder="تکرار گذرواژه" /><br />
        <button type="submit">ورود</button><br />
    </form>
  </div>
</div>
</div> */}