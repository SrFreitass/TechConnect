import { db } from "../../firebaseconfig";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { CarouselStyled } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from "react-router-dom";
import { query, where } from "@firebase/firestore";






export function Carousel() {

  const [news, setNews] = useState([]);
  const userCollectionRef = collection(db, "articles");

  useEffect(() => {
    const fetchEmphasizedArticles = async () => {
      try {
        const q = query(collection(db, "articles"), where("emphasis", "==", true));
        const querySnapshot = await getDocs(q);

        // Transforma o resultado em um array de objetos
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setNews(data);
        console.log(data)
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
                <a href="#">{items.tag}</a>
                <Link to={`./news/${items.title}`}><h2>{items.title}</h2></Link>
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
            {oie}
        </Swiper>
      </CarouselStyled>
    )
}

