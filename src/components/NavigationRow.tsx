import React from "react";
import { Direction, Kassorna } from "../helpers/makeDesciption";

export interface INavigationRowProps {
  text?: string;
  cube?: string;
  fromCube?: string;
  toCube?: string;
  direction?: Direction;
  startDirection?: Kassorna | null;
  start?: boolean;
  end?: boolean;
  meters?: number;
  initialInformation: boolean;
}

export const NavigationRow: React.FC<INavigationRowProps> = ({
  text,
  cube,
  start = false,
  end = false,
  direction,
  meters = 0,
  initialInformation,
  startDirection,
  toCube,
}) => {
  const textWithTurn =
    !start &&
    !end &&
    `Vid takkub ${cube}, sväng ${
      direction === Direction.LEFT ? "vänster" : "höger"
    }`;

  const textForward =
    !start && !end && `Gå ${meters} m rakt fram mot takkub ${toCube}`;

  const textForwardWithStartInfo =
    !start &&
    !end &&
    `${startDirection}. Gå ${meters} m rakt fram mot takkub ${toCube}`;

  return (
    <li
      className={`navigation-row ${start ? "start" : ""} ${end ? "end" : ""}`}
    >
      <span className={`indicator ${start || end ? "big" : "small"}`}></span>
      <div className="text-wrapper">
        {start && <h5>Startpunkt</h5>}
        {end && <h5>Slutpunkt</h5>}
        {text && text}
        {direction !== Direction.FORWARD
          ? textWithTurn
          : initialInformation
          ? textForwardWithStartInfo
          : textForward}
      </div>

      {cube && <span className="cube">{cube}</span>}

      {start && <span className={`line end-line`} />}
      {!start && !end && <span className={`line`} />}
      {end && <span className={`line start-line`} />}
    </li>
  );
};
