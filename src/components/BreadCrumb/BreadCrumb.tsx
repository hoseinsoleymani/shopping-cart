interface Props {
  passLinks: string[];
  currentPass: string;
}

const BreadCrumb: React.FC<Props> = ({ passLinks, currentPass }) => {
  return (
    <div>
      {passLinks.map((link, index) => (
        <div key={index}>
          <button>{link}</button>
          <span>/</span>
        </div>
      ))}

      <span>{currentPass}</span>
    </div>
  );
};

export default BreadCrumb;
