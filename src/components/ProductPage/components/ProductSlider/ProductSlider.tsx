// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Product from "../../../Product/Product";
import { useProducts } from "../../../../api/useProducts";
import { Wrapper } from "./productStyles";

const ProductSlider = () => {
  const { data } = useProducts();
  return (
    <Wrapper>
      <Swiper spaceBetween={30} slidesPerView={1}>
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Product product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default ProductSlider;
