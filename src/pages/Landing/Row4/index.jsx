import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import SliderCards from "../Row4/SliderCards";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Row4() {
  return (
    <>
      <div className="mb-5 py-3" style={{ marginTop: "12rem" }}>
        <div
          className="d-flex justify-content-around align-items-center"
          style={{ flexWrap: "wrap" }}
        >
          <div className="text-center" style={{ flex: "1" }}>
            <p
              className="main-header text-center"
              style={{ fontSize: "5rem", color: "#423F4C" }}
            >
              Video <br /> Voyage ,Dive <br /> Into Learning <br /> Adventures
            </p>

            <div className="slider-controler" style={{ marginTop: "6rem" }}>
              <div className="swiper-button-prev slider-arrow">
                <FaArrowLeft
                  className="swiper-button-prev slider-arrow"
                  style={{
                    fontSize: "3rem",
                    //   color: "#CFCED1"
                  }}
                />
              </div>
              <div className="swiper-button-next slider-arrow">
                <FaArrowRight
                  className="swiper-button-next slider-arrow"
                  style={{
                    fontSize: "3rem",
                    // color: "#CFCED1",
                    cursor: "pointer",
                  }}
                />
              </div>
              {/* <div className="swiper-pagination"></div> */}
            </div>
          </div>

          <div
            style={{ width: "800px", cursor: "pointer" }}
            className="text-start mb-5"
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <SliderCards />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCards />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCards />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCards />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Row4;
