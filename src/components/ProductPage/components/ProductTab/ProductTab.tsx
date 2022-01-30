import { useState } from "react";
import { Col } from "react-bootstrap";
import { Tab, TabHeader, TabBody, TabBodyContainer } from "./productTabStyles";
import { tabContents } from "./data/tabContents";

const ProductTab = () => {
  const [value, setValue] = useState(0);
  const currentContent = tabContents[value];
  return (
    <Col md="12" lg="9">
      <Tab>
        <TabHeader>
          {tabContents.map((item, index) => (
            <button
              className={index === value ? "active" : ""}
              type="button"
              key={item.id}
              onClick={() => setValue(index)}
            >
              {item.text}
            </button>
          ))}
        </TabHeader>
        <TabBodyContainer>
          {currentContent.content.map((item) => (
            <TabBody key={item.id}>
              <p>{item.text}</p>
            </TabBody>
          ))}
        </TabBodyContainer>
      </Tab>
    </Col>
  );
};

export default ProductTab;
