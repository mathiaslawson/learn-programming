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
          style={{ flexWrap: "wrap" }}
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

        <div className="d-flex justify-content-center">
          <div
            style={{
              width: "75%",
              backgroundColor: "#A282FD",
              borderRadius: "15px",
            }}
          >
            <div
              className="d-flex justify-content-center "
              style={{
                marginTop: "8rem",

                color: "white",
              }}
            >
              <div className="mt-5 mx-5">
                <h1
                  className="main-header py-3 px-3 text-center"
                  style={{ fontSize: "4rem" }}
                >
                  Infinite learning lab
                </h1>
              </div>
              <div
                style={{
                  position: "relative",
                  top: "-12rem",
                  left: "7rem",
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/e937/5a13/feab8db7b67400a8b94a2009d1bf576c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNeJL2R3l699R5Aizhw12wsE1W-WFPLT2WV0UmNeMLMU1UhkX6g3DuX~05tbyrZEL3dTiv5XbEHY2-Sk3tGCUWdVXHo60CKygu9KXM6I4FXiiE04QyEFkU4spJPQ5cIQ9juK5LNqbTaVDx2wmbqNabUb0SOEsnGph9gQ9o2vPVdgPQGT40ggUXKC~y3TWXNkCEER7jePdrrbqDp1HXapny8Tf50mV4LwwJ79nhedUeaDncpC~FNOiy-4b-ZfatBr6IH9SjckUDRthvZD35g~x4hrnAmMXak3mlZgnlxGfTMLaU75DlVpqnHjlq150pll3ZUJz7cNrfS1xaLY5l9RTA__"
                  width={"700"}
                ></img>
              </div>
            </div>
            <div
              className="text-center text-light mb-5"
              style={{ marginTop: "-17rem" }}
            >
              {" "}
              <h1 className="main-header">Imagine, Create, Discover</h1>
              <p className="mt-4 sub-header fs-4 p-4 ">
                Welcome to the Infinite Learning Lab, where your curiosity leads
                the way! This special corner of Giggle Learn is your canvas for
                endless exploration
              </p>
              <div>
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
