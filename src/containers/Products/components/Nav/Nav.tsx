import { NavWrapper, TemplateBtn } from "./navStyles";
import FirstTemplate from "../../../../svg/First-Products-template.svg";
import SecondTemplate from "../../../../svg/Second-Products-template.svg";
import { useProducts } from "../../../../api/useProducts";
import { useCartStore } from "../../../../store/store";

const Nav = () => {
  const { data: products } = useProducts();
  const {handleProductsNumber, handleProductsFilter} = useCartStore()

  if (products == null) return <p></p>;

  return (
    <NavWrapper>
      <div>
        <span>{products?.length} Items</span>

        <div>
          <span>Sort By</span>
          <select>
            <option value="all">All</option>
            <option value="price">Price</option>
            <option value="discount">Discount</option>
            <option value="sneaker">Sneaker</option>
            <option value="bags">Bag</option>
            <option value="belt">Belt</option>
            <option value="sunglass">Sunglass</option>
          </select>
        </div>

        <div>
          <span>Show</span>
          <select onChange={handleProductsNumber}>
            <option value="select">Select</option>
            {Array.from({ length: products?.length }).map((_, index) => (
              <option value={`${index + 1}`} key={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <TemplateBtn>
          <img src={FirstTemplate} alt="first template" />
        </TemplateBtn>
        <TemplateBtn>
          <img src={SecondTemplate} alt="second template" />
        </TemplateBtn>
      </div>
    </NavWrapper>
  );
};

export default Nav;
