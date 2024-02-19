import { FC } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useGetSponsorListQuery } from "../../Redux/hojre";
import GetFirestore from "../../hooks/GetFirestore";
interface sponsor {
    imgUrl: string
}

const BrandHome: FC = () => {
    // const { data, isLoading, error } = useGetSponsorListQuery("");
    const {data}=GetFirestore("sponsorList");
    return (
        <div className="py-10 bg-gray-100">
            <div className="container mx-auto">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    loop={true}
                    autoplay={
                        {
                            delay: 3000,
                            disableOnInteraction: false
                        }
                    }
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={
                        [Autoplay]
                    }
                    className="mySwiper"
                >
                    {data && data.map((sponsor: sponsor, i: number) => {
                        return (
                            <SwiperSlide className="" key={i}><img className="mx-auto" src={sponsor.imgUrl}></img></SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default BrandHome
