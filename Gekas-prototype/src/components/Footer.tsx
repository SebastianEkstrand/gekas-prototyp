import { useState } from "react";
import closeSVG from "../assets/close.svg";
import CubePNG from "../assets/cube.png";
import GridPNG from "../assets/grid-example.png";

export interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = ({}) => {
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const closeModal = () => {
    setShowGuide(false);
  };

  const guideWindow = (
    <>
      <div className={`tint ${showGuide ? "show" : ""}`} />
      <div className={`guide-modal ${showGuide ? "show" : ""}`}>
        <button className="close-btn" onClick={closeModal}>
          <img src={closeSVG} alt="Stäng" />
        </button>
        <h3>Navigations guide</h3>
        <span>Såhär hittar du med hjälp av tak-kuberna</span>
        <div className="image-wrapper">
          <img src={CubePNG} className="cube" />
        </div>
        <p>
          <strong>Tak-kuber finns i taket</strong> på plan 1 i varuhuset. De är
          ordnade alfabetiskt från A närmast kassorna till K längst in i
          varuhuset.
        </p>
        <div className="image-wrapper">
          <img src={GridPNG} className="grid-png" />
        </div>
      </div>
    </>
  );

  return (
    <div className="guide">
      <h2>Hur funkar navigationen?</h2>
      <p>
        Använd dig av Tak-kuber som finns i taket på plan 1 i varuhuset. De går
        alfabetiskt från A närmast kassorna till K längst in i varuhuset.
      </p>
      <button onClick={() => setShowGuide(true)} className="btn">
        Visa Guide
      </button>
      {guideWindow}
    </div>
  );
};
