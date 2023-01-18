import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop useKeyboardArrows autoPlay showStatus={false} interval={5000}>
      {slides.map((slide) => {
        return <Image src={slide.image} height="400px" width="200px" />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
