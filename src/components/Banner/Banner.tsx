import {
  Wrapper,
  DesktopWrapper,
  ResponsiveWrapper,
  RightDiv,
  LeftDiv,
} from "./bannerStyles";
import BannerShoes from "../../images/banner-shoes.png";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import ResponsiveImg from "../../images/banner-responsive.png";

const Banner = () => {
  return (
    <Wrapper>
      <DesktopWrapper>
        <Container>
          <Row className="align-items-center">
            <Col md="12" lg="6">
              <LeftDiv>
                <h2>
                  Adidas Men Running <br />
                  Sneakers
                </h2>
                <p>Performance and design. Taken right to the edge.</p>

                <Link to="/">SHOP NOW</Link>
              </LeftDiv>
            </Col>
            <Col md="12" lg="6">
              <RightDiv>
                <img src={BannerShoes} alt="Shoes" />
              </RightDiv>
            </Col>
          </Row>
        </Container>
      </DesktopWrapper>

      <ResponsiveWrapper>
        <img src={ResponsiveImg} alt="Products" />
      </ResponsiveWrapper>
    </Wrapper>
  );
};

export default Banner;
