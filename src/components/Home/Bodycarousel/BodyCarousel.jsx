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



const BodyCarousel = () => {
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
    <span className={styles.headingbody}>Blockbusters Deals</span>
    <span className={styles.headingbody1}>See all details</span>
        <div className={styles.innerContainer}>
          
      <Slider {...settings}>
        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/41ezRvTwcaL._AC_SY200_.jpg" />
          </div>
          
          <div>
            <button className={styles.buttoncarousel}>60% Off</button>
            <button className={styles.buttoncarousel1}>Republic Day Sale</button>
            <p className={styles.textcarousel}><sup>₹</sup>29,900<sup>00</sup></p>
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/51DLLa8HNWL._AC_SY200_.jpg" />
          </div>
          <div>
            <button className={styles.buttoncarousel}>30% Off</button>
            <button className={styles.buttoncarousel1}>Republic Day Sale</button>
            <p className={styles.textcarousel}><sup>₹</sup>49,900<sup>00</sup></p>
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/51DLLa8HNWL._AC_SY200_.jpg" />
          </div>
          <div>
            <button className={styles.buttoncarousel}>40% Off</button>
            <button className={styles.buttoncarousel1}>Republic Day Sale</button>
            <p className={styles.textcarousel}><sup>₹</sup>39,900<sup>00</sup></p>
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/41pQ4gJMwEL._AC_SY200_.jpg" />
          </div>
          <div>
            <button className={styles.buttoncarousel}>45% Off</button>
            <button className={styles.buttoncarousel1}>Republic Day Sale</button>
            <p className={styles.textcarousel}><sup>₹</sup>49,900<sup>00</sup></p>
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/41BnHjRP0ZS._AC_SY200_.jpg" />
          </div>
          <div>
            <button className={styles.buttoncarousel}>35% Off</button>
            <button className={styles.buttoncarousel1}>Republic Day Sale</button>
            <p className={styles.textcarousel}><sup>₹</sup>39,900<sup>00</sup></p>
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/41kg-+XWoxL._AC_SY200_.jpg" />
          </div>
          <div>
            <button className={styles.buttoncarousel}>45% Off</button>
            <button className={styles.buttoncarousel1}>Republic Day Sale</button>
            <p className={styles.textcarousel}><sup>₹</sup>59,900<sup>00</sup></p>
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/418rmVFVCAL._AC_SY200_.jpg" />
          </div>
          <div>
            <button className={styles.buttoncarousel}>15% Off</button>
            <button className={styles.buttoncarousel1}>Republic Day Sale</button>
            <p className={styles.textcarousel}><sup>₹</sup>19,900<sup>00</sup></p>
          </div>
        </div>
        
        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/41XtHlbmOHL._AC_SY200_.jpg" />
          </div>
          <div>
            <button className={styles.buttoncarousel}>50% Off</button>
            <button className={styles.buttoncarousel1}>Republic Day Sale</button>
            <p className={styles.textcarousel}><sup>₹</sup>39,900<sup>00</sup></p>
          </div>
        </div>

        <div  className={styles.card2}>
          <div className={styles.cardimage}>
          <Image src="https://m.media-amazon.com/images/I/41ezRvTwcaL._AC_SY200_.jpg" />
          </div>
          <div>
            <button className={styles.buttoncarousel}>35% Off</button>
            <button className={styles.buttoncarousel1}>Republic Day Sale</button>
            <p className={styles.textcarousel}><sup>₹</sup>29,900<sup>00</sup></p>
          </div>
        </div>
        

       

        

        
      </Slider>
      </div>
    </div>
   
    </>);
}

export default BodyCarousel