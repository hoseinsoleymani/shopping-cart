import { Img } from "react-image";
import { imageUrl } from "../../api/index";
import ReactLoading from "react-loading";

interface Props {
  imgUrl: string;
}

const SupportImage: React.FC<Props> = ({ imgUrl }) => {
  return (
    <Img
      src={`${imageUrl}${[imgUrl]}`}
      loader={
        <div className="text-center mx-auto">
          <ReactLoading type={"bars"} color={"#4A90E2"} width={80} />
        </div>
      }
    />
  );
};

export default SupportImage;
