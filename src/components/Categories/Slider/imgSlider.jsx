import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import styles from "./slider.module.css";
import Router from "next/router";
import Link from "next/link";


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "grey",
        height: "4rem",
        width: "2.5rem",
        right: "0",
        top: "90",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
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
        height: "4rem",
        width: "2.5rem",
        zIndex:"5",
        left:"0",
        top:"90",
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
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
      <Link href={`/products?category=kids`}  className={styles.card}>
        <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/9._SS300_QL85_.png"   alt="Hello"/>
        <h1>Kids&apos; fashion</h1>
        </Link>
        <Link href={`/products?category=womens`}  className={styles.card}>
          <img src=" https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/2._SS300_QL85_.png "   alt="Hello"/>
          <h1 >Women&apos;s Clothing</h1>
        </Link>
        <Link href={`/products?category=mens`} className={styles.card}>
        <img src=" https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/1._SS300_QL85_.png"   alt="Hello"/>
        <h1 >Men&apos;s Clothing</h1>
        </Link>

        <Link href={`/products?category=foot`}  className={styles.card}>
        <img src=" https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/4._SS300_QL85_.png"   alt="Hello"/>
        <h1>Footwear</h1>
        </Link>
        <Link href={`/products?category=jewell`} className={styles.card}>
        <img src=" https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/7._SS300_QL85_.png"   alt="Hello"/>
        <h1>Jewellery</h1>
        </Link>
        <Link  href={`/products?category=lug`}  className={styles.card}>
        <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/5._SS300_QL85_.png "   alt="Hello"/>
        <h1>Luggage & backpacks</h1>
        </Link>
        <Link href={`/products?category=watch`}  className={styles.card}>
        <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/6-._SS300_QL85_.png "   alt="Hello"/>
        <h1>Watches</h1>
        </Link>
        <Link  href={`/products?category=beauty`} className={styles.card}>
        <img src=" https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/3._SS300_QL85_.png"   alt="Hello"/>
        <h1>Beauty</h1>
        </Link>
        <Link href={`/products?category=hand`}  className={styles.card}>
        <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/8._SS300_QL85_.png"   alt="Hello"/>
        <h1>Handbags</h1>
        </Link>
        <Link href={`/products?category=sun`} className={styles.card}>
        <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/10._SS300_QL85_.png"   alt="Hello"/>
        <h1>Sunglasses & frames</h1>
        </Link>
        <Link href={`/products?category=brand`} className={styles.card}>
        <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/Amazon._SS300_QL85_.png"   alt="Hello"/>
        <h1>Amazon brands</h1>
        </Link>
      </Slider>
    </div>
  );
};




export default ImgSlider;