import { Link } from "react-router-dom"
import HeaderSecondry from "../../components/HeaderSecondry"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import GetFirestore from "../../hooks/GetFirestore"

const Blog = () => {
  const { data } = GetFirestore("blogs");
  return (
    <div>
      <Navbar />
      <HeaderSecondry />
      <div className="py-10 bg-orange-50">
        <div className="container mx-auto px-2 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data && data.map((blog: any, i: number) => {
              return (
                <div key={i} className="flex justify-center items-center my-shadow bg-white hover:-translate-y-1 duration-150 ease-linear rounded-md">
                  <div className="flex flex-col justify-center items-center p-4">
                    <div className="w-full"><img className="w-full" src={window.location.origin + blog.imgUrl} alt={blog.imgAlt}></img></div>
                    <div className="flex flex-col gap-y-3 mt-4">
                      <div><p className="text-2xl">{blog.title}</p></div>
                      <div className="flex gap-x-5">
                        <div className="flex items-center gap-x-1"><i className={`${blog.metaList[0].iconName} text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{blog.metaList[0].text}</span></div>
                        <div className="flex items-center gap-x-1"><i className={`${blog.metaList[1].iconName} text-orange-600`}></i><span className="flex justify-center items-center font-vazir-thin">{blog.metaList[1].text}</span></div>
                      </div>
                      <div><p className="font-vazir-thin">{blog.desc.substring(0, 250) + "..."}</p></div>
                      <div className="border-t-2 py-4"><Link to={`/blogs/${blog.id}`}>{blog.btnText}</Link></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog