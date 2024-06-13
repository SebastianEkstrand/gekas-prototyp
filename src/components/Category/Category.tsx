import "./Category.scss";
import { useState } from "react";
import nerSVG from "../../assets/ner.svg";
import closeSVG from "../../assets/close.svg";
import { IProductCategories } from "../../data/testData";
import { NavigationPoint } from "../NavigationPoint/NavigationPoint";

export interface ICategoryProps {
  title: string;
  selectOption: (sel: IProductCategories) => void;
  items: IProductCategories[];
  lineColor: string;
}

export const Category: React.FC<ICategoryProps> = ({
  title,
  selectOption,
  items,
  lineColor = "#aa00aa",
}) => {
  const [open, setOpen] = useState(false);

  const getItemsTitles = () => {
    const strArr: string[] = [];

    for (let i = 0; i < 3; i++) {
      if (items[i]) {
        strArr.push(items[i].title);
      }
    }

    let returnString: string = "";
    if (items.length > 3) {
      returnString = strArr.join(", ") + "...";
    } else {
      returnString = strArr.join(", ");
    }

    return returnString;
  };

  return (
    <section className="category-item">
      <span className="startLine" style={{ backgroundColor: lineColor }} />
      <button
        onClick={() => setOpen(!open)}
        className={`topArea ${open ? "open" : ""}`}
      >
        <h5>{title}</h5>
        <p>{getItemsTitles()}</p>
        <span className="arrow-wrapper">
          <img src={nerSVG} alt="pil ner" className="arrow" />
        </span>
      </button>
      {open && (
        <div className="bottomArea">
          <ul>
            {items.map((row) => (
              <li key={row.key}>
                <NavigationPoint
                  onClick={() => {
                    setOpen(false);
                    selectOption(row);
                  }}
                  title={row.title}
                  cube={row.cube}
                />
              </li>
            ))}
          </ul>

          <button onClick={() => setOpen(!open)} className={`bottom-button`}>
            <img src={closeSVG} alt="Stäng" /> Stäng meny för {title}
          </button>
        </div>
      )}
    </section>
  );
};
