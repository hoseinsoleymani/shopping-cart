import { NavWrapper, TemplateBtn } from "./navStyles";
import FirstTemplate from "../../../../svg/First-Products-template.svg";
import SecondTemplate from "../../../../svg/Second-Products-template.svg";

const Nav = () => {
  return (
    <NavWrapper>
      <div>
        <span>13 Items</span>

        <div>
          <span>Sort By</span>
          <select>
            <option value="All">All</option>
            <option value="sneakers">Sneaker</option>
            <option value="bags">Bag</option>
            <option value="belt">Belt</option>
          </select>
        </div>

        <div>
          <span>Show</span>
          <select>
            {Array.from({ length: 20 }).map((_, index) => (
              <option value={`${index}`} key={index}>
                {index}
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
