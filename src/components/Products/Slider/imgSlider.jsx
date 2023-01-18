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
        height: "5.5rem",
        width: "2.5rem",
        right:"0",
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
        height: "5.5rem",
        width: "2.5rem",
        zIndex:"5",
        left:"0",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }}
      onClick={onClick}
    />
  );
}

const ImgSlider = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.card}>
          <Image src=" https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/2._SS300_QL85_.png " width={180} height={180} alt="Hello"/>
          <h1>Women&apos;s Clothing</h1>
        </div>
        <div  className={styles.card}>
        <Image src=" https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/1._SS300_QL85_.png" width={180} height={180} alt="Hello"/>
        <h1>Men&apos;s Clothing</h1>
        </div>
        <div  className={styles.card}>
        <Image src=" https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/4._SS300_QL85_.png" width={180} height={180} alt="Hello"/>
        <h1>Footwear</h1>
        </div>
        <div  className={styles.card}>
        <Image src=" https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/7._SS300_QL85_.png" width={180} height={180} alt="Hello"/>
        <h1>Jewellery</h1>
        </div>
        <div  className={styles.card}>
        <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/7._SS300_QL85_.png " width={180} height={180} alt="Hello"/>
        <h1>Luggage & backpacks</h1>
        </div>
        <div  className={styles.card}>
        <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/6-._SS300_QL85_.png " width={180} height={180} alt="Hello"/>
        <h1>Watches</h1>
        </div>
        <div  className={styles.card}>
        <Image src=" https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/3._SS300_QL85_.png" width={180} height={180} alt="Hello"/>
        <h1>Beauty</h1>
        </div>
        <div  className={styles.card}>
        <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/8._SS300_QL85_.png" width={180} height={180} alt="Hello"/>
        <h1>Handbags</h1>
        </div>
        <div  className={styles.card}>
        <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/9._SS300_QL85_.png" width={180} height={180} alt="Hello"/>
        <h1>Kids&apos; fashion</h1>
        </div>
        <div  className={styles.card}>
        <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/10._SS300_QL85_.png" width={180} height={180} alt="Hello"/>
        <h1>Sunglasses & frames</h1>
        </div>
        <div  className={styles.card}>
        <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/Amazon._SS300_QL85_.png" width={180} height={180} alt="Hello"/>
        <h1>Amazon brands</h1>
        </div>
      </Slider>
      <Image style={{marginTop:"15px"}} src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Cashaback/banner1._CB615765745_.gif" width={1600} height={300} alt="hello"/>
    </div>
  );
};

export default ImgSlider;