import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CarouselPanel = ({ imageArray }) => {

  console.log('imageArray-->> ', imageArray)
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={10}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {imageArray && imageArray.length > 0 &&
        imageArray.map((image, index) => (
          <div>
            <img src={image} key={index} alt="xyz" height="200px" width="100%" style={{ border: "1px solid white" }} />
          </div>
        )
        )}
      {/* <div><img src={imageArray[0]}></img></div>
      <div><img src={imageArray[1]}></img></div>
      <div><img src={imageArray[2]}></img></div>
      <div><img src={imageArray[3]}></img></div> */}
    </Carousel>
  )
}

export default CarouselPanel;