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

const ProductPage = () => {
  let { id } = useParams();

  const { data: product } = useProduct(id);
  const { data: products } = useProducts();

  if (products == null || product == null) return <p></p>;

  return (
    <MainLayout>
      <BreadCrumb crumbs={["Home", "products", product.title]} />

      <section className="my-5">
        <Container>
          <Row>
            <Col xs="12" md="6" lg="4">
              <ProductImage
                anotherImages={product.anotherImage}
                image={product.image}
              />
            </Col>

            <Col xs="12" md="6" lg="5">
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
          <div className="py-5">
            <Row>
              {products.slice(0, 4).map((item) => (
                <Product product={item} key={item.id} />
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default ProductPage;
