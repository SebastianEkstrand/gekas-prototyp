import React from "react";

export interface IGuideProps {}

export const Guide: React.FC<IGuideProps> = ({}) => {
  return (
    <div className="guide">
      <h2>Hur funkar navigationen?</h2>
      <p>
        Använd dig av Tak-kuber som finns i taket på plan 1 i varuhuset. De går
        alfabetiskt från A närmast kassorna till K längst in i varuhuset.
      </p>
      <button className="btn">Visa Guide</button>
    </div>
  );
};
