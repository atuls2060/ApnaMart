import React from "react";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Box,Text,Button } from "@chakra-ui/react";
import styles from "./bodycarousel.module.css"

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
        right:"-100",
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
        left:"-100",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
       

      }}
      onClick={onClick}
    />
  );
}



const BodyCarousel2 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    dots:false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (<>
    <div className={styles.container2}>
    <span className={styles.headingbody}>Up to 40% off | Daily essentials</span>
    <span className={styles.headingbody1}>See all details</span>
        <div className={styles.innerContainer}>
          
      <Slider {...settings}>
        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/61T8dZV5-cL._AC_SY200_.jpg" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/51RcxiQNx9L._AC_SY200_.jpg" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/81TvE11exoL._AC_SY200_.jpg" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/71ls0omMj1L._AC_SY200_.jpg" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/71tYPz++3+L._AC_SY200_.jpg" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/71CcOCW2y8L._AC_SY200_.jpg" />
          </div>
        </div>
        
        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/81acvJPczBL._AC_SY200_.jpg" />
          </div>
        </div>

        <div  className={styles.card3}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/61iQby6TUML._AC_SY200_.jpg" />
          </div>
        </div>
         
      </Slider>
      </div>
    </div>
   
    </>);
}

export default BodyCarousel2