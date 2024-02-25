import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
export default function Veiw(){
    return(
        <div className="veiw">
            <Swiper
                    slidesPerView={2}
                    modules={[Pagination]}
                    pagination
                    loop

                >
                    <SwiperSlide><img src={require("../../assets/pic/air-jordan-1-low-se-womens-shoes-pTFmdP.png")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/pic/court-legacy-lift-womens-shoes-x0B6BB.jpg")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/pic/court-legacy-lift-womens-shoes-x0B6BB.png")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/pic/th (1).jpg")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/pic/th.jpg")} /></SwiperSlide>
                </Swiper>
        </div>
    )
}