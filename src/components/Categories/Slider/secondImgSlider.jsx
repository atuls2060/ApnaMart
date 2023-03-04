import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import styles from "./slider.module.css";


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{ ...style,
        display: "block",
        color: "grey",
         height: "2rem",
         width: "2rem",
        right:"-9.5%",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"

        // marginRight:"-25px"
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "grey",
         height: "2rem",
         width: "2rem",
        zIndex: "5",
        left: "-9.5%",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      onClick={onClick}
    />
  );
}

const SecondImgSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (<>
          <Image style={{marginBottom:"15px"}} src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Cashaback/banner1._CB615765745_.gif" width={1600} height={300} alt="hello"/>
    <div className={styles.container2}>
      
        <div className={styles.innerContainer}>
      <Slider {...settings}>
        <div  >
        <img className={styles.card2}  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/Header/unrec__pc_day1._SX3000_QL85_.jpg"  alt="Hello"/>
        </div>
        <div  >
        <img className={styles.card2} src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/topbanner/PC/Steal-deals-Header-3000x770._SX3000_QL85_.jpg"  alt="Hello"/>
        </div>
        <div  >
        <img className={styles.card2} src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Event/stealdealspage/BxGy-Header-3000x770._SX3000_QL85_.jpg"  alt="Hello"/>
        </div>
        <div  >
        <img className={styles.card2} src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Event/stealdealspage/coupon-Header-3000x770._SX3000_QL85_.jpg"  alt="Hello"/>
        </div>
      </Slider>
      </div>
    </div>
    <div className={styles.bankcontainer}>
    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/JANART2023/BankStripe/Event_Bank_Stripe_PC.jpg" width={1600} height={300} alt="hello"/>

    </div>
    </>);
};

export default SecondImgSlider;