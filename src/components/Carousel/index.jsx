import { query, where } from "@firebase/firestore";
import DOMPurify from "dompurify";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { db } from "../../services/firebase";
import { CarouselStyled } from "./style";

export function Carousel() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchEmphasizedArticles = async () => {
      try {
        const q = query(
          collection(db, "articles"),
          where("emphasis", "==", true)
        );
        const querySnapshot = await getDocs(q);

        // Transforma o resultado em um array de objetos
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNews(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao executar a consulta:", error);
      }
    };

    fetchEmphasizedArticles();
  }, []);

  const oie = news.map((items, index) => {
    return (
      <SwiperSlide key={index}>
        <CarouselStyled>
          <img src={items.imageURL}></img>
          <div>
            <Link
              to={`../category/${items.category}`}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(`#${items.category}`),
              }}
            />
            <Link to={`./article/${items.id}`}>
              <h2
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(items.title),
                }}
              />
            </Link>
          </div>
        </CarouselStyled>
      </SwiperSlide>
    );
  });

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
          delay: 6500,
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {oie}
      </Swiper>
    </CarouselStyled>
  );
}
