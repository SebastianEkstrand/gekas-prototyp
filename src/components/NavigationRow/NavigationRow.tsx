import React from "react";
import "./NavigationRow.scss";
import { Direction, Kassorna } from "../../helpers/makeDesciption";
import rulltrappa from "../../assets/rulltrappa.svg";
import left from "../../assets/svangVanster.svg";
import right from "../../assets/svangHoger.svg";

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
      Vid takkub <strong>{cube}</strong>, sväng{" "}
      {direction === Direction.LEFT ? "vänster" : "höger"}
    </>
  );

  const textForward = !start && !end && (
    <>
      Gå <strong>ca {meters} m rakt fram</strong> mot takkub{" "}
      <strong>{toCube}</strong>
    </>
  );

  const textForwardWithStartInfo = !start && !end && (
    <>
      {startDirection}. Gå <strong>ca {meters} m rakt fram</strong> mot takkub{" "}
      <strong>{toCube}</strong>
    </>
  );

  const returnIcon = () => {
    if (icon === "rulltrappa") {
      return (
        <span className="icon">
          <img src={rulltrappa} />
        </span>
      );
    } else if (direction === Direction.LEFT) {
      return (
        <span className="icon">
          <img src={left} />
        </span>
      );
    } else if (direction === Direction.RIGHT) {
      return (
        <span className="icon">
          <img src={right} />
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

      <div className="cube-and-icon">
        {cube && <span className="cube">{cube}</span>}
        {returnIcon()}
      </div>

      {start && <span className={`line end-line`} />}
      {!start && !end && <span className={`line`} />}
      {end && <span className={`line start-line`} />}
    </li>
  );
};
