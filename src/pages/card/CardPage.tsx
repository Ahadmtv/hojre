import { FC } from 'react'
import HeaderSecondry from '../../components/HeaderSecondry'
import Quantity from '../../components/single-sec/Quantity'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const CardPage: FC = () => {
    return (
        <div>
            <Navbar />
            <HeaderSecondry />
            <div>
                <div className='container mx-auto'>
                    <div className='my-6 my-shadow'>
                        <table className="w-full">
                            <thead className='bg-amber-600 text-white py-3 px-2'>
                                <tr className='text-right'>
                                    <th className='py-3 pr-3'>نام محصول</th>
                                    <th className='py-3'>قیمت</th>
                                    <th className='py-3'>تعداد</th>
                                    <th className='py-3'>کل</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='h-[100px]'>
                                    <td className='bg-gray-200 pr-3'>
                                        <div className='flex gap-x-4 items-center'>
                                            <img className='w-[100px]' src={`${window.location.origin}/assets/images/category/02.jpg`}></img>
                                            <span>کلاه شاپو 2024</span>
                                        </div>
                                    </td>
                                    <td className='bg-gray-200'><div>115تومان</div></td>
                                    <td className='bg-gray-200'>
                                        <div>تعداد اینجا</div>
                                    </td>
                                    <td className='bg-gray-200'><div>115تومان</div></td>
                                </tr>
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