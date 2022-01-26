import { useEffect } from "react";
import { useProducts } from "../../api/useProducts";
import Product from "../../components/Product/Product";
import { isString } from "formik";
import Header from "./components/Header/Header";
import HeaderProduct from "./components/HeaderProduct/HeaderProduct";
import { Main, ProductsList } from "./homeStyles";
import Title from "./components/Title/Title";
import FilterBtns from "./components/FilterBtns/FilterBtns";
import { Container, Row, Col } from "react-bootstrap";
import { useCartStore } from "../../store/store";
import { MainLayout } from "./../../components/MainLayout";

const Home = () => {
  const { data, isError } = useProducts();

  const { setProducts } = useCartStore();
  const { filterProducts } = useCartStore();

  useEffect(() => {
    if (data != null) {
      setProducts(data);
    }
  }, [data]);

  if (isError) return <p>{isError}</p>;

  return (
    <MainLayout>
      <Header />

      <Main>
        <section>
          <div className="container">
            <div className="header__products">
              {data?.slice(0, 3).map((item) => (
                <HeaderProduct key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>

        <ProductsList>
          <Container>
            <Title title="BEST SELLER" />
            <FilterBtns />
            <Row>
              {filterProducts?.map((product) => (
                <Col key={product.id} xs="12" lg="3">
                  <Product key={product.id} product={product} />
                </Col>
              ))}
            </Row>
          </Container>
        </ProductsList>
      </Main>
    </MainLayout>
  );
};

export default Home;
