import { FC, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { imageUrl } from "../../../../api";
import { ProductImageEl, Wrapper } from "./productImageStyles";

interface Props {
  image: {
    url: string;
  };
  anotherImages: [
    {
      url: string;
      id?: number;
    }
  ];
}

const ProductImage: FC<Props> = ({ anotherImages }) => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  return (
    <Wrapper>
      <ProductImageEl>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: false,
              width: 375,
              height: 271,
              src: `${imageUrl}${anotherImages[imgIndex].url}`,
            },
            largeImage: {
              src: `${imageUrl}${anotherImages[imgIndex].url}`,
              width: 600,
              height: 500,
            },
          }}
        />
      </ProductImageEl>

      <div className="product__image-list">
        {anotherImages.map((item, index) => (
          <div key={item.id} onClick={() => setImgIndex(index)}>
            <img src={`${imageUrl}${item.url}`} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default ProductImage;
