import { CarouselStyled } from "./style"
import bannerPascal from '../../assets/images/bannerpascal.png'
import { Banner } from "./banners"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';



export function Carousel() {

    const Banners = Banner.map((items, index) => {
        return (
          <SwiperSlide key={index}>
            <CarouselStyled>
              <img src={items.image}></img>
              <div>
                <a href="#">{items.tag}</a>
                <h1>{items.title}</h1>
                <p>{items.summary}</p>
              </div>
            </CarouselStyled>
          </SwiperSlide>
        )
    })

    return (
      <CarouselStyled>
          <Swiper
          slidesPerView={1}
          navigation={true}
          loop
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          modules={[Pagination, Autoplay, Navigation]}

          >
            {Banners}
        </Swiper>
      </CarouselStyled>
    )
}

