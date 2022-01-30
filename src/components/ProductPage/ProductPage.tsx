import { useParams } from "react-router-dom";
import { useProduct } from "../../api/useProduct";
import ProductImage from "./components/ProductImage/ProductImage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { MainLayout } from "../MainLayout";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import ProductTab from "./components/ProductTab/ProductTab";
import Title from "../../containers/Home/components/Title/Title";
import { useProducts } from "../../api/useProducts";
import Product from "../Product/Product";
import { Wrapper, ProductsContainer } from "./productPageStyles";
import { ProductsEl } from "../../containers/Home/homeStyles";

const ProductPage = () => {
  let { id } = useParams();

  const { data: product } = useProduct(id);
  const { data: products } = useProducts();

  if (products == null || product == null) return <p></p>;

  return (
    <MainLayout>
      <BreadCrumb crumbs={["Home", "products", product.title]} />
      <Wrapper>
        <section className="my-5">
          <Container>
            <Row>
              <Col xs="12" md="12" lg="4">
                <ProductImage
                  anotherImages={product.anotherImage}
                  image={product.image}
                />
              </Col>

              <Col xs="12" md="12" lg="5">
                <ProductDetails product={product} />
              </Col>

              <Col xs="12" md="6" lg="3">
                <ProductSlider />
              </Col>
            </Row>

            <Row>
              <ProductTab />
            </Row>
          </Container>
        </section>

        <section className="pt-4">
          <Title title="RELATED PRODUCTS" />

          <Container>
            <ProductsContainer className="py-5">
              <ProductsEl className="d-flex flex-lg-wrap justify-content-between">
                {products.slice(0, 4).map((item) => (
                  <div key={item.id}>
                    <Product product={item} key={item.id} />
                  </div>
                ))}
              </ProductsEl>
            </ProductsContainer>
          </Container>
        </section>
      </Wrapper>
    </MainLayout>
  );
};

export default ProductPage;
