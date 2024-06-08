import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import SliderCards from "../Row4/SliderCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "reactstrap";
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
          style={{ flexWrap: "wrap", overflow: "hidden" }}
        >
          <div className="text-center" style={{ flex: "1" }}>
            <p
              className="main-header text-center"
              style={{ fontSize: "4rem", color: "#423F4C" }}
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
            style={{ width: "860px", cursor: "pointer" }}
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

        <div className="d-flex justify-content-center mx-1">
          <div
            style={{
              width: "70%",
              backgroundColor: "#A282FD",
              borderRadius: "15px",
            }}
          >
            <div
              className="d-flex justify-content-center position-relative"
              style={{ marginTop: "8rem", color: "white" }}
            >
              <div className="mt-5 mx-5">
                <h1
                  className="main-header py-3 px-3 text-center"
                  style={{ fontSize: "4rem" }}
                >
                  Infinite learning
                  <br /> lab
                </h1>
              </div>
            
              <div className="d-none d-xl-block">
                <img
                  src="https://utfs.io/f/9c253b1a-a924-4814-9234-c73f38405646-y8a0dg.png"
                  className="img-fluid"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    overflow: "hidden",
                    maxWidth: "500px",
                    height: "auto",
                    position: "absolute",
                    top: '-200px', 
                    left: '50rem'
                  }}
                  alt="Image"
                />
              </div>
            </div>
            <div className="text-center text-light mb-5">
              {" "}
              <h1 className="main-header">Imagine, Create, Discover</h1>
              <p className="mt-4 sub-header fs-4 p-4 ">
                Welcome to the Infinite Learning Lab, where your curiosity leads
                the way!
                <br /> This special corner of Giggle Learn is your canvas for
                endless exploration
              </p>
              <div className="">
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "35px",
                  }}
                  className="px-5 py-3"
                >
                  <p className="main-header">Explore Now</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Row4;
