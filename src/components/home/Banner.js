import React, { useState } from 'react'
import Slider from "react-slick";
import {
    ban,
    bantwo,
    banthree,
    banfour,
    banfive,
    bansix,
    banseven,
    bannine,
    baneight,
    banten,
} from "../../assets/Index";

const Banner = () => {
  const [doActive, setDocActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: false,
        beforeChange: (prev, next) => {
          setDocActive(next);
        },
        appendDots: (dots) => (
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "0",
              right: "0",
              margin: "0 auto",
              transform: "translate(-50% -50%)",
              width: "210px",
            }}
          >
            <ul 
            style={{ 
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between", 
              }}
           > 
              {dots} 
              </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={ 
              i === doActive
              ? {
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#131921",
              background: "none",
              padding: "8px 0",
              cursor: "pointer",
            }
          : {
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#131921",
            background: "none",
            padding: "8px 0",
            cursor: "pointer",
          }
          }
          >
            {i + 1}
          </div>
        ),
        
    };
  return (
    <div className="w-full">
    <div className="w-full h-full relative">
    <Slider {...settings}>
      <div>
        <img src={ban} alt="ban" />
      </div>
      <div>
        <img src={bantwo} alt="bantwo" />
      </div>
      <div>
        <img src={banthree} alt="banthree" />
      </div>
      <div>
        <img src={banfour} alt="banfour" />
      </div>
      <div>
        <img src={banfive} alt="banfive" />
      </div>
      <div>
        <img src={bansix} alt="bansix" />
      </div>
      <div>
        <img src={banseven} alt="banseven" />
      </div>
      <div>
        <img src={baneight} alt="baneight" />
      </div>
      <div>
        <img src={bannine} alt="bannine" />
      </div>
      <div>
        <img src={banten} alt="banten" />
      </div>
      

     
    </Slider>
    </div>
  </div>
  )
}

export default Banner

