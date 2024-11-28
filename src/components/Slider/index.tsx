import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css"

function Slider() {
  const data = [
    { id: "1", image: "/1.png" },
    { id: "2", image: "/4.png" },
    { id: "3", image: "/5.png" },
    { id: "4", image: "/6.png" },
  ];
  return (
    <div>
      <div className="container">
        <Swiper
          className="rounded-xl"
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay
          loop
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="Slider" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
