import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { swiperableData } from "../data/otherActivityCardData";
import { OtherKeyActivitiesCard } from "./OtherKeyActivitiesCard";

/**
 * Carousel is a reusable React component that renders a
 * Swiper carousel (by npm package 'swiper') with a list of
 * OtherKeyActivitiesCard components as children. The
 * component is configured to have two slides per view, with
 * navigation controls and pagination. It also logs the
 * Swiper instance and slide change events to the console.
 *
 * @returns {JSX.Element} A rendered Swiper carousel component
 *   with children OtherKeyActivitiesCard components.
 */
export const Carousel = () => {
  return (
    <Swiper
      className="swiperDOG"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {swiperableData.map((item, index) => (
        <SwiperSlide key={index}>
          <OtherKeyActivitiesCard
            img={item.img}
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            action={item.action}
            icon={item.icon}
            name={item.name}
            position={item.position}
            type="person"
            topic={item.topic}
            keyword={item.keyword}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
