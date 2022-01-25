import { useNavigate } from "react-router-dom";
import { BreadcrumbWrapper } from "./breadCrumbStyles";

interface Props {
  crumbs: string[];
}

// (crumb: string) => void; || (crumb: string): void

const BreadCrumb: React.FC<Props> = ({ crumbs }) => {
  const isLast = (index: number): boolean => index === crumbs.length - 1;
  const navigate = useNavigate();

  const selected = (crumb: string) => {
    if (crumb === "Home") return navigate("/");

    navigate(`/${crumb}`);
  };

  return (
    <nav>
      <BreadcrumbWrapper>
        {crumbs.map((crumb, ci) => {
          const disabled = isLast(ci) ? "disabled" : "";

          return (
            <li key={ci} className="breadcrumb-item align-items-center">
              <button
                className={`btn btn-link ${disabled}`}
                onClick={() => selected(crumb)}
              >
                {crumb}
              </button>
            </li>
          );
        })}
      </BreadcrumbWrapper>
    </nav>
  );
};

export default BreadCrumb;
