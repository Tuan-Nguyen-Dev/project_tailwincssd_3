import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="container mx-auto px-3 lg:px-5 py-5">
      <div className="md:h-[600px] w-full overflow-hidden rounded-2xl relative">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
          className="overflow-hidden relative w-full h-full mx-auto md:rounded-xl"
        >
          <div className="flex">
            <SwiperSlide>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                  alt=""
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                  alt=""
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1672305335209-89529287f183?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1606206873764-fd15e242df52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          </div>
          <div className="hidden md:block">
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
              <button className="custom-prev bg-white p-3 rounded-full cursor-pointer">
                <ArrowLeft size={30} />
              </button>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
              <button className="custom-next bg-white p-3 rounded-full cursor-pointer">
                <ArrowRight size={30} />
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
