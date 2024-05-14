import React, { useState } from "react";

import { IProductCategories, mazeData } from "../data/testData";
import { NavigationRow } from "./NavigationRow";
import {
  findShortestSimplestPath,
  possiblePathBeforeDRoute,
} from "../helpers/ShortestPath";
import {
  Direction,
  Kassorna,
  calculateDataForDescription,
} from "../helpers/makeDesciption";

export interface INavigationPresenterProps {
  start: IProductCategories;
  end: IProductCategories;
  reset: () => void;
}

export interface IStepsInformation {
  cubesInDirection: number;
  direction: Direction;
  cube?: string;
  fromCube?: string;
  toCube?: string;
  xAxis: boolean;
  startDirection?: Kassorna;
  extra?: string;
}

export const NavigationPresenter: React.FC<INavigationPresenterProps> = ({
  start,
  end,
  reset,
}) => {
  /**
   *
   *  1. Hitta snabbaste väg X + Y eller Y + X beroende på om det finns hinder i vägen eller ej
   *  2. OM hinder finns i vägen välj den som har minst hinder
   *  3. Hitta hur långt man kan gå innan första hindret är ivägen
   *  4. Koppla på en d-tour och stega igenom de stegen, avbryt så fort man kommit in på rätt kolumn eller rad igen enligt snabbaste vägen.
   *  5. Försök fortsätta på snabbaste vägen om det är möjligt tills nästa d-tour behöver göras. Dvs. repetera 3 + 4 + 5 igen.
   *  6. klart
   *
   */
  const [showMaze, setShowMaze] = useState<boolean>(false);
  const distansBetweenLetters: number = 30;
  const distansBetweenNumbers: number = 25;

  var unique: string[] = possiblePathBeforeDRoute(
    findShortestSimplestPath(start.cube, end.cube),
    start.cube,
    end.cube
  ).filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });

  console.log("Get Description for:", unique);

  const steps: IStepsInformation[] = calculateDataForDescription(unique, end);

  return (
    <>
      <div className="navigation-wrapper" id="way-finder">
        <h2>Vägbeskrivning</h2>
        <button className="link-button" onClick={reset}>
          Ny Vägbeskrivning
        </button>
        <ol>
          <NavigationRow
            initialInformation={false}
            text={start.title}
            start
            cube={start.cube}
          />
          {steps.map((step, index) => {
            console.log(
              step,
              "step_" +
                index +
                "_" +
                (step.cube
                  ? step.cube
                  : step?.fromCube
                  ? step?.fromCube + step?.toCube
                  : index)
            );
            return (
              <NavigationRow
                key={
                  "step_" +
                  step.cube +
                  "_" +
                  (step.cube
                    ? step.cube
                    : step?.fromCube
                    ? step?.fromCube + step?.toCube
                    : index)
                }
                initialInformation={index === 0}
                direction={step.direction}
                cube={step.cube}
                fromCube={step.fromCube}
                toCube={step.toCube}
                startDirection={step.startDirection}
                meters={
                  step.cubesInDirection *
                  (step.xAxis ? distansBetweenNumbers : distansBetweenLetters)
                }
              />
            );
          })}
          <NavigationRow
            initialInformation={false}
            text={end?.extra ? end.extra : end.title}
            end={end?.extra ? false : true}
            cube={end.cube}
            icon={end.icon ? end.icon : ""}
            showOnlyText={end?.extra ? true : false}
          />
          {end.extra && (
            <NavigationRow
              initialInformation={false}
              text={end.title}
              end
              cube={""}
            />
          )}
        </ol>

        <div className="center">
          <button className="btn white" onClick={() => setShowMaze(!showMaze)}>
            {showMaze ? "Göm navigations karta" : "Visa navigations karta"}
          </button>
        </div>

        {showMaze && (
          <>
            <p className="simple-info">Förenklad karta av varuhuset</p>
            <div className="warehouse-layout">
              {mazeData.map((row) => (
                <div className="row">
                  {row.cells.map((cell, index) => {
                    return (
                      <div
                        key={
                          index + "_" + cell + Math.round(Math.random() * 1000)
                        }
                        className={`cell ${
                          unique.includes(cell) ? "move" : ""
                        } ${cell === "-" ? "wall" : ""}
                    ${cell === start.cube ? "start" : ""}
                    ${cell === end.cube ? "end" : ""}
                    `}
                      >
                        {cell === start.cube
                          ? "👋"
                          : cell === end.cube
                          ? "🏁"
                          : cell}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="lower-row-warehouse">
              <p>
                ⬆️
                <br />
                Entré
              </p>
              <p className="bg">Kassorna</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
