import { Link } from "react-router-dom"
import HeaderSecondry from "../../components/HeaderSecondry"

const Blog = () => {
  const blogList = [
    {
      id: 1,
      imgUrl: '/assets/images/blog/01.jpg',
      imgAlt: 'نمایه مطلب',
      title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
      commentCount: '3',
      btnText: 'ادامه مطلب',
      metaList: [
        {
          iconName: 'fa-solid fa-user',
          text: 'احد متولی',
        },
        {
          iconName: 'fa-solid fa-calendar-days',
          text: '17 خرداد 1402',
        },
      ],
    },
    {
      id: 2,
      imgUrl: '/assets/images/blog/02.jpg',
      imgAlt: 'نمایه مطلب',
      title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
      commentCount: '3',
      btnText: 'ادامه مطلب',
      metaList: [
        {
          iconName: 'fa-solid fa-user',
          text: 'احد متولی',
        },
        {
          iconName: 'fa-solid fa-calendar-days',
          text: '17 خرداد 1402',
        },
      ],
    },
    {
      id: 3,
      imgUrl: '/assets/images/blog/03.jpg',
      imgAlt: 'نمایه مطلب',
      title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
      commentCount: '3',
      btnText: 'ادامه مطلب',
      metaList: [
        {
          iconName: 'fa-solid fa-user',
          text: 'احد متولی',
        },
        {
          iconName: 'fa-solid fa-calendar-days',
          text: '17 خرداد 1402',
        },
      ],
    },
    {
      id: 4,
      imgUrl: '/assets/images/blog/04.jpg',
      imgAlt: 'نمایه مطلب',
      title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
      commentCount: '3',
      btnText: 'ادامه مطلب',
      metaList: [
        {
          iconName: 'fa-solid fa-user',
          text: 'احد متولی',
        },
        {
          iconName: 'fa-solid fa-calendar-days',
          text: '17 خرداد 1402',
        },
      ],
    },
    {
      id: 5,
      imgUrl: '/assets/images/blog/05.jpg',
      imgAlt: 'نمایه مطلب',
      title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
      commentCount: '3',
      btnText: 'ادامه مطلب',
      metaList: [
        {
          iconName: 'fa-solid fa-user',
          text: 'احد متولی',
        },
        {
          iconName: 'fa-solid fa-calendar-days',
          text: '17 خرداد 1402',
        },
      ],
    },
    {
      id: 6,
      imgUrl: '/assets/images/blog/06.jpg',
      imgAlt: 'نمایه مطلب',
      title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
      commentCount: '3',
      btnText: 'ادامه مطلب',
      metaList: [
        {
          iconName: 'fa-solid fa-user',
          text: 'احد متولی',
        },
        {
          iconName: 'fa-solid fa-calendar-days',
          text: '17 خرداد 1402',
        },
      ],
    },
    {
      id: 7,
      imgUrl: '/assets/images/blog/07.jpg',
      imgAlt: 'نمایه مطلب',
      title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
      commentCount: '3',
      btnText: 'ادامه مطلب',
      metaList: [
        {
          iconName: 'fa-solid fa-user',
          text: 'احد متولی',
        },
        {
          iconName: 'fa-solid fa-calendar-days',
          text: '17 خرداد 1402',
        },
      ],
    },
    {
      id: 8,
      imgUrl: '/assets/images/blog/08.jpg',
      imgAlt: 'نمایه مطلب',
      title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
      commentCount: '3',
      btnText: 'ادامه مطلب',
      metaList: [
        {
          iconName: 'fa-solid fa-user',
          text: 'احد متولی',
        },
        {
          iconName: 'fa-solid fa-calendar-days',
          text: '17 خرداد 1402',
        },
      ],
    },
    {
      id: 9,
      imgUrl: '/assets/images/blog/09.jpg',
      imgAlt: 'نمایه مطلب',
      title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
      commentCount: '3',
      btnText: 'ادامه مطلب',
      metaList: [
        {
          iconName: 'fa-solid fa-user',
          text: 'احد متولی',
        },
        {
          iconName: 'fa-solid fa-calendar-days',
          text: '17 خرداد 1402',
        },
      ],
    },
  ]
  return (
    <div>
      <HeaderSecondry />
      <div className="py-10 bg-orange-50">
        <div className="container mx-auto px-2 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogList.map((blog,i) => {
              return (
                <div key={i} className="flex justify-center items-center my-shadow bg-white hover:-translate-y-1 duration-150 ease-linear rounded-md">
                  <div className="flex flex-col justify-center items-center p-4">
                    <div className="w-full"><img className="w-full" src={window.location.origin+blog.imgUrl} alt={blog.imgAlt}></img></div>
                    <div className="flex flex-col gap-y-3 mt-4">
                    <div><p className="text-2xl">{blog.title}</p></div>
                    <div className="flex gap-x-5">
                      <div className="flex items-center gap-x-1"><i className={`${blog.metaList[0].iconName} text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{blog.metaList[0].text}</span></div>
                      <div className="flex items-center gap-x-1"><i className={`${blog.metaList[1].iconName} text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{blog.metaList[1].text}</span></div>
                    </div>
                    <div><p className="font-vazir-thin">{blog.desc}</p></div>
                    <div className="border-t-2 py-4"><Link to={`/مطالب/${blog.id}`}>{blog.btnText}</Link></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog