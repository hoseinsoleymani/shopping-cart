import { useProducts } from "../../api/useProducts";
import Product from "../../components/Product/Product";
import Header from "./components/Header/Header";
import HeaderProduct from "./components/HeaderProduct/HeaderProduct";
import { Main, ProductsList, ProductsEl } from "./homeStyles";
import Title from "./components/Title/Title";
import FilterBtns from "./components/FilterBtns/FilterBtns";
import { Container } from "react-bootstrap";
import { useCartStore } from "../../store/store";
import { MainLayout } from "./../../components/MainLayout";

const Home = () => {
  const { data: products, isError } = useProducts();

  const { filterProducts } = useCartStore();

  if (isError) return <p>{isError}</p>;

  return (
    <MainLayout>
      <Header />

      <Main>
        <section>
          <div className="header-products__container">
            <div className="header__products">
              {products?.slice(0, 3).map((item) => (
                <HeaderProduct key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>

        <ProductsList>
          <div className="custom-container">
            <Title title="BEST SELLER" />
            <FilterBtns />
            <ProductsEl className="d-flex flex-lg-wrap justify-content-between">
              {filterProducts?.map((product) => (
                <div key={product.id}>
                  <Product key={product.id} product={product} />
                </div>
              ))}
            </ProductsEl>
          </div>
        </ProductsList>
      </Main>
    </MainLayout>
  );
};

export default Home;
