import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import Slider from "react-slick";
import data from "../DB/Thoughts";
export default function ThoughtSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-4 ">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div className="card CardBg cngCard">
              <div className="p-2">
                <span className="d-flex flex-row justify-content-end">
                  {[1, 2, 3, 4, 5].map((star) => {
                    return <AiTwotoneStar />;
                  })}
                </span>
                <div className="my-2 d-flex">
                  <div className="d-flex justify-content-center align-items-center">
                    <div>
                      <img
                        src={item.img}
                        alt="profile"
                        style={{
                          height: 40,
                          width: 40,
                          borderRadius: 100,
                        }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="w-75 mx-2 d-flex align-items-center">
                    <div>
                      <h6 className="m-0 p-0">{item.name}</h6>
                      <span
                        className="text-muted fw-bold"
                        style={{ fontSize: 14 }}
                      >
                        {item.designation}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="comments">
                  <small style={{ fontSize: 12 }}>{item.comments}</small>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
