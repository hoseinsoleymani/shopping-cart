import { MainLayout } from "../../components/MainLayout";
import { Container, Row, Col } from "react-bootstrap";
import Banner from './../../components/Banner/Banner';

const Products = () => {
  return (
    <MainLayout>
      <main>
        <section>
          <Container>
            <Row>
              <Col md="12" lg="3">
                a
              </Col>
              <Col md="12" lg="9">
                <Banner />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </MainLayout>
  );
};

export default Products;
