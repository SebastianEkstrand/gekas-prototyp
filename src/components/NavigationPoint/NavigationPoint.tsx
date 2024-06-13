import "./NavigationPoint.scss";
import arrowRight from "../../assets/arrowRight.svg";

export interface INavigationPointProps {
  onClick: () => void;
  title: string;
  subtitle?: string;
  cube: string;
  paddingLeft?: boolean;
  searchString?: string;
}

export const NavigationPoint: React.FC<INavigationPointProps> = ({
  onClick,
  title,
  subtitle,
  cube,
  paddingLeft,
  searchString,
}) => {
  const getHighlightedText = (text: string, highlight: string) => {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span className="highlighted">
        {" "}
        {parts.map((part, i) => (
          <span
            key={i}
            className={
              part.toLowerCase() === highlight.toLowerCase() ? "blue" : ""
            }
          >
            {part}
          </span>
        ))}{" "}
      </span>
    );
  };

  return (
    <button
      onClick={onClick}
      className={`navigation-point ${paddingLeft ? "use-padding-left" : ""}`}
    >
      <span className="start-arrow">
        <img src={arrowRight} />
      </span>
      <p>{searchString ? getHighlightedText(title, searchString) : title}</p>
      {subtitle && <span className="subtitle">{subtitle}</span>}
      <span className="cube">{cube}</span>
    </button>
  );
};
