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
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
       

      }}
      onClick={onClick}
    />
  );
}



const BodyCarousel1 = () => {
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
    <span className={styles.headingbody}>Great deals on mobiles & accessories | Starting ₹39</span>
    <span className={styles.headingbody1}>See all details</span>
        <div className={styles.innerContainer}>
          
      <Slider {...settings}>
        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_1._CB615578592_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_7._CB615578592_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_4._CB615578592_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_3._CB615578592_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_5._CB615578592_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_6._CB615578592_.jpg" />
          </div>
        </div>
        
        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200._CB615573109_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_6._CB615578592_.jpg" />
          </div>
        </div>
         
      </Slider>
      </div>
    </div>
   
    </>);
}

export default BodyCarousel1