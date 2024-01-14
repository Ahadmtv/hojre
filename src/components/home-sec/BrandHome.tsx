import { FC } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const BrandHome: FC = () => {
    const sponsorList = [
        {
            imgUrl: "./assets/images/sponsor/01.png",
        },
        {
            imgUrl: "./assets/images/sponsor/02.png",
        },
        {
            imgUrl: "./assets/images/sponsor/03.png",
        },
        {
            imgUrl: "./assets/images/sponsor/04.png",
        },
        {
            imgUrl: "./assets/images/sponsor/05.png",
        },
        {
            imgUrl: "./assets/images/sponsor/06.png",
        },
    ];
    return (
        <div className="py-10 bg-pink-200">
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
                    {sponsorList.map((sponsor,i) => {
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
