import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageSlider = ({ images }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
        navigation
    //   pagination={{ clickable: true }}
    //   //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log("slide change")}
    >
      {images.map((im, i) => (
        <SwiperSlide>
          <img
            src={im.src}
            alt={im.location}
            className="rounded-md"
          />
      </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
