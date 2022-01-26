import { MainLayout } from "../../components/MainLayout";
import { Container, Row, Col } from "react-bootstrap";
import { lazy } from "react";
import { hotDeals } from "./data/hotDeals";
import HotDeals from "./components/HotDeals/HotDeals";
import { HeadSection } from "./productsStyles";
import Nav from "./components/Nav/Nav";
import { useProducts } from "../../api/useProducts";
import Product from "../../components/Product/Product";
import Prices from "./components/Prices/Prices";

const Banner = lazy(() => import("./../../components/Banner/Banner"));
const BreadCrumb = lazy(() => import("../../components/BreadCrumb/BreadCrumb"));

const Products = () => {
  const { data: products, isError, error } = useProducts();

  if (products == null) return <h2></h2>;

  // if (isError) return <h2>{error}</h2>;

  return (
    <MainLayout>
      <main>
        <BreadCrumb crumbs={["Home", "products"]} />
        <HeadSection>
          <Container>
            <Row>
              <Col md="12" lg="3">
                <HotDeals hotDeals={hotDeals} />
                <Prices />
              </Col>
              <Col md="12" lg="9">
                <Banner />
                <Nav />
                <div className="d-flex flex-wrap justify-content-between">
                  {products.map((product) => (
                    <Product product={product} />
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
