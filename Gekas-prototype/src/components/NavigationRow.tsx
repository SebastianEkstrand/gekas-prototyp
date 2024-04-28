import React from "react";

export interface INavigationRowProps {
  text: string;
  cube?: string;
  start?: boolean;
  end?: boolean;
}

export const NavigationRow: React.FC<INavigationRowProps> = ({
  text,
  cube,
  start = false,
  end = false,
}) => {
  return (
    <li
      className={`navigation-row ${start ? "start" : ""} ${end ? "end" : ""}`}
    >
      <span className={`indicator ${start || end ? "big" : "small"}`}></span>
      <div className="text-wrapper">
        {start && <h5>Startpunkt</h5>}
        {end && <h5>Slutpunkt</h5>}
        {text}
      </div>

      {cube && <span className="cube">{cube}</span>}

      {start && <span className={`line end-line`} />}
      {!start && !end && <span className={`line`} />}
      {end && <span className={`line start-line`} />}
    </li>
  );
};
