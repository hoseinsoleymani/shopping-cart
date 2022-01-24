import { useParams } from "react-router-dom";
import { useProduct } from "../../api/useProduct";
import { isString } from "formik";
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

  const { data } = useProduct(id);
  const { data: products } = useProducts();

  if (data === null || isString(data) || data === undefined)
    return <p>Loading....</p>;

  if (products == null) return <p>Loading...</p>;
  return (
    <MainLayout>
      {/* <BreadCrumb passLinks={["Home", "products"]} currentPass={data.title} /> */}

      <section className="my-5">
        <Container>
          <Row>
            <Col xs="12" md="6" lg="4">
              <ProductImage
                anotherImages={data.anotherImage}
                image={data.image}
              />
            </Col>

            <Col xs="12" md="6" lg="5">
              <ProductDetails product={data} />
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
