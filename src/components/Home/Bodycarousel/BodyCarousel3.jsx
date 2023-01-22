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



const BodyCarousel3 = () => {
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
    <div className={styles.container3}>
    <span className={styles.headingbody}>Shop deals in top categories</span>
    <span className={styles.headingbody1}>See all details</span>
        <div className={styles.innerContainer}>
          
      <Slider {...settings}>
        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/JanART23/Teaser/HomePage/D68345313_INWLD_JanART-Uber_DesktopShoveler_200x200._CB617503228_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/JanART23/DesktopShoveler_200x2001._CB617457590_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/OHL/JanART23/200x200._CB617511932_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/DesktopShoveler_200x200._CB617568050_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/JanART/DesktopShoveler_200x200-Eng._CB617567178_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img2023/test/JanART/Cons_Desktop_Shoveler_200X200._CB617361892_.jpg" />
          </div>
        </div>
        
        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/media/JanART_2023/DesktopShoveler_200x200_Media_2._CB617140214_.jpg" />
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/JANART/Rev/Desktop/Gateway/Amazonbrands_DesktopShoveler_200x200._CB617362434_.jpg" />
          </div>
        </div>
         
      </Slider>
      </div>
    </div>
   
    </>);
}

export default BodyCarousel3