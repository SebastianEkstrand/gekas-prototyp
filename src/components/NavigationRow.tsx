import React from "react";
import { Direction, Kassorna } from "../helpers/makeDesciption";
import rulltrappa from "../assets/rulltrappa.png";

export interface INavigationRowProps {
  text?: string;
  cube?: string;
  fromCube?: string;
  toCube?: string;
  direction?: Direction;
  startDirection?: Kassorna | null;
  start?: boolean;
  end?: boolean;
  icon?: string;
  meters?: number;
  initialInformation: boolean;
  showOnlyText?: boolean;
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
  icon = "",
  showOnlyText = false,
}) => {
  const textWithTurn = !start && !end && (
    <>
      Vid takkub <span>{cube}</span>, sväng{" "}
      {direction === Direction.LEFT ? "vänster" : "höger"}
    </>
  );

  const textForward = !start && !end && (
    <>
      Gå <span>ca {meters} m rakt fram</span> mot takkub <span>{toCube}</span>
    </>
  );

  const textForwardWithStartInfo = !start && !end && (
    <>
      {startDirection}. Gå <span>ca {meters} m rakt fram</span> mot takkub{" "}
      <span>{toCube}</span>
    </>
  );

  const returnIcon = (icon: string) => {
    if (icon === "rulltrappa") {
      return (
        <span className="icon">
          <img src={rulltrappa} />
        </span>
      );
    }
  };

  return (
    <li
      className={`navigation-row ${start ? "start" : ""} ${end ? "end" : ""} ${
        cube ? "cube" : ""
      }`}
    >
      <span className={`indicator ${start || end ? "big" : "small"}`}></span>
      <div className="text-wrapper">
        {start && <h5>Startpunkt</h5>}
        {end && <h5>Slutpunkt</h5>}
        {text && text}
        {!showOnlyText &&
          (direction !== Direction.FORWARD
            ? textWithTurn
            : initialInformation
            ? textForwardWithStartInfo
            : textForward)}
      </div>

      {icon && returnIcon(icon)}
      {cube && <span className="cube">{cube}</span>}

      {start && <span className={`line end-line`} />}
      {!start && !end && <span className={`line`} />}
      {end && <span className={`line start-line`} />}
    </li>
  );
};
