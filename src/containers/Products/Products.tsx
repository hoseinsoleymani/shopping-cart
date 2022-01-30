import { MainLayout } from "../../components/MainLayout";
import { Container, Row, Col } from "react-bootstrap";
import { lazy } from "react";
import { hotDeals } from "./data/hotDeals";
import HotDeals from "./components/HotDeals/HotDeals";
import { HeadSection, FilterWrapper } from "./productsStyles";
import Nav from "./components/Nav/Nav";
import { useProducts } from "../../api/useProducts";
import Product from "../../components/Product/Product";
import Prices from "./components/Prices/Prices";
import { useCartStore } from "../../store/store";
import Color from "./components/Color/Color";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Banner = lazy(() => import("./../../components/Banner/Banner"));
const BreadCrumb = lazy(() => import("../../components/BreadCrumb/BreadCrumb"));

const Products = () => {
  const { filterProductsByPrice: products, productsLength } = useCartStore();

  if (products == null) return <h2></h2>;

  return (
    <MainLayout>
      <main>
        <BreadCrumb crumbs={["Home", "products"]} />
        <HeadSection>
          <Container>
            <Row>
              <Col md="12" lg="3">
                <FilterWrapper>
                  <HotDeals hotDeals={hotDeals} title="HOT DEALS" />
                  <Prices />
                  <Color />
                  <HotDeals hotDeals={hotDeals} title="BRAND" />
                  <Link to="/" className="button">
                    MORE
                  </Link>
                </FilterWrapper>
              </Col>
              <Col md="12" lg="9">
                <Banner />
                <Nav />
                <div className="d-flex flex-sm-wrap justify-content-between products__list">
                  {products.slice(0, productsLength).map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </HeadSection>
      </main>
    </MainLayout>
  );
};

export default Products;
