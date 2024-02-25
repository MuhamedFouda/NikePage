import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";
import { useRecoilState } from "recoil";
import { $color, $oldprice, $price } from "../../store";

export default function LeftSide() {
    const[color]=useRecoilState($color)
    const [price] = useRecoilState($price)
    const [oldprice] = useRecoilState($oldprice)
    return (
        <div className="leftside">
            <div className="text col-4">
                <span> Women's Running Shoe</span>
                <h1> NIKE ZOOM PEGASUS 35 TURBO</h1>
                <p> Elite Nike runners tested and provided feedback
                    the Nike Zoom pegasus 35 Turbo in order to bring
                    record-breaking innovation to your daily tranning runs
                </p>
                <h1>Discount : <span>{price}</span></h1>
                <h2> price :{oldprice}</h2>
                <span> Color Choosen : <span style={{color:"black"}}> " {color} "  </span></span>
                <button className="btn btn-dark" style={{ width: "15rem", backgroundColor: "black" }} >Add To Card</button>
            </div>
            <div className="pic col-8">
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-btn-next",
                        prevEl: ".swiper-btn-prev"
                    }}
                    loop

                >
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/11.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/117.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/111.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/112.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/113.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/115.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/12.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/13.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/14.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/15.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/16.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/17.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/18.jpg")} /></SwiperSlide>
                    <SwiperSlide style={{backgroundColor:"white"}}><img src={require("../../assets/19.jpg")} /></SwiperSlide>

                </Swiper>
                <div className="wipebutton">
                    <button className="swiper-btn-prev" style={{ borderRadius: "50%", width: "3rem", height: "3rem", color: "black", backgroundColor: "white" }} > P </button>
                    <button className="swiper-btn-next" style={{ borderRadius: "50%", width: "3rem", height: "3rem", color: "black", backgroundColor: "white" }} > N </button>
                </div>
                {/* <FontAwesomeIcon className="swiper-button-next" style={{fontSize:"5rem",border:"1px solid black" , borderRadius:"50%"}}icon={faArrowLeft} />            
                <FontAwesomeIcon className="swiper-button-prev" style={{fontSize:"5rem",border:"1px solid black" , borderRadius:"50%"}} icon={faArrowRight} />                 */}
            </div>
        </div>
    )
}