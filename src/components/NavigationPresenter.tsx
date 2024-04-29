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

  /*
  const positionInAlphabet = (myChar: string) => {
    // Convert the character into lowercase
    const myCharLowercase = myChar.toLowerCase();

    // Find the position of the char in the alphabet
    const position = letters.indexOf(myCharLowercase) + 1;

    // Return the desired message with the position
    return position;
  };

  const goYThenX = (): string[] => {
    const tempMovement: string[] = [];
    /// CREATING MOVEMENT PATH Y-Axis
    if (startLetterPos < endLetterPos) {
      for (var i = startLetterPos; i < endLetterPos; i++) {
        tempMovement.push(`${letters[i - 1].toUpperCase()}${startNumber}`);
      }
    } else {
      for (var i = startLetterPos; i > endLetterPos; i--) {
        tempMovement.push(`${letters[i - 1].toUpperCase()}${startNumber}`);
      }
    }

    /// CREATING MOVEMENT PATH X-Axis
    if (startNumber < endNumber) {
      for (var i = startNumber; i < endNumber; i++) {
        tempMovement.push(`${endLetter}${i}`);
      }
    } else {
      for (var i = startNumber; i > endNumber; i--) {
        tempMovement.push(`${endLetter}${i}`);
      }
    }

    return tempMovement;
  };

  const goXThenY = (): string[] => {
    const tempMovement: string[] = [];
    /// CREATING MOVEMENT PATH Y-Axis
    if (startLetterPos < endLetterPos) {
      for (var i = startLetterPos; i < endLetterPos; i++) {
        tempMovement.push(`${letters[i - 1].toUpperCase()}${endNumber}`);
      }
    } else {
      for (var i = startLetterPos; i > endLetterPos; i--) {
        tempMovement.push(`${letters[i - 1].toUpperCase()}${endNumber}`);
      }
    }

    /// CREATING MOVEMENT PATH X-Axis
    if (startNumber < endNumber) {
      for (var i = startNumber; i < endNumber; i++) {
        tempMovement.push(`${startLetter}${i}`);
      }
    } else {
      for (var i = startNumber; i > endNumber; i--) {
        tempMovement.push(`${startLetter}${i}`);
      }
    }

    return tempMovement;
  };

  const startLetter = start.cube.substring(0, 1);
  const endLetter = end.cube.substring(0, 1);
  const startNumber = parseInt(start.cube.substring(1));
  const endNumber = parseInt(end.cube.substring(1));

  const startLetterPos: number = positionInAlphabet(startLetter);
  const endLetterPos: number = positionInAlphabet(endLetter);
  

  const foundYX = goYThenX().some((r) => {
    console.log(r, NOT_POSSIBLE_MOVEMENTS.includes(r));
    return NOT_POSSIBLE_MOVEMENTS.includes(r);
  });

  const foundXY = goXThenY().some((r) => {
    console.log(r, NOT_POSSIBLE_MOVEMENTS.includes(r));
    return NOT_POSSIBLE_MOVEMENTS.includes(r);
  });

  console.log(foundYX, foundXY);

  MOVEMENT_CUBES = !foundYX ? goYThenX() : !foundXY ? goXThenY() : [];

  if (MOVEMENT_CUBES.length === 0) {
    const PATH = goYThenX();
    PATH.some((r, index) => {
      if (!NOT_POSSIBLE_MOVEMENTS.includes(r)) {
        MOVEMENT_CUBES.push(r);
      } else {
        console.log("not possible: ", r, index, PATH[index - 1]);
        dTours.forEach((dTour) => {
          if (dTour.steps.includes(PATH[index - 1])) {
            console.log(dTour);
            let lastPositionThatIsSame: string = "";

            const temp2: string[] = [...PATH];

            temp2.reverse().forEach((step) => {
              if (lastPositionThatIsSame === "" && dTour.steps.includes(step)) {
                console.log("lastPositionThatIsSame", step);
                lastPositionThatIsSame = step;
              }
            });

            MOVEMENT_CUBES = MOVEMENT_CUBES.concat(
              dTour.steps.slice(
                1,
                dTour.steps.indexOf(lastPositionThatIsSame) > 1
                  ? dTour.steps.indexOf(lastPositionThatIsSame)
                  : dTour.steps.length
              )
            );

            const startLookFrom: string[] = PATH.slice(index);

            let toSpliceFrom: string = "";
            const tempArray: string[] = [...dTour.steps];

            tempArray.reverse().forEach((step, index) => {
              if (toSpliceFrom === "" && startLookFrom.includes(step)) {
                console.log(step, index);
                toSpliceFrom = step;
              }
            });

            const lastSteps: string[] = PATH.splice(PATH.indexOf(toSpliceFrom));

            MOVEMENT_CUBES = MOVEMENT_CUBES.concat(lastSteps);

            return;
          }
        });

        dTours.forEach((dTour) => {
          const rev: string[] = [...dTour.steps].reverse();
          if (rev.includes(PATH[index - 1])) {
            let lastPositionThatIsSame: string = "";

            const temp2: string[] = [...PATH];

            temp2.reverse().forEach((step) => {
              if (lastPositionThatIsSame === "" && dTour.steps.includes(step)) {
                lastPositionThatIsSame = step;
              }
            });

            MOVEMENT_CUBES = MOVEMENT_CUBES.concat(
              dTour.steps.slice(1, dTour.steps.indexOf(lastPositionThatIsSame))
            );

            const startLookFrom: string[] = PATH.slice(index);

            let toSpliceFrom: string = "";
            const tempArray: string[] = [...dTour.steps];

            tempArray.reverse().forEach((step, index) => {
              if (toSpliceFrom === "" && startLookFrom.includes(step)) {
                console.log(step, index);
                toSpliceFrom = step;
              }
            });

            const lastSteps: string[] = PATH.splice(PATH.indexOf(toSpliceFrom));

            //console.log(startLookFrom, dTour.steps[toSpliceFrom]);
            MOVEMENT_CUBES = MOVEMENT_CUBES.concat(lastSteps);

            return;
          }
        });
      }
    });
  }

 

  */

  /*
  const steps: IStepsInformation[] = [];

  const cubesToTravelYAxis: number = endLetterPos - startLetterPos;
  const cubesToTravelXAxis: number = endNumber - startNumber;
  const moveAgainstCashiers: boolean = cubesToTravelYAxis < 0;

  

  if (foundXY || foundYX) {
    // Move from Number to Number column
    if (cubesToTravelXAxis > 0) {
      steps.push({
        text: `Med kassorna åt din högra sida, gå ${
          cubesToTravelXAxis * distansBetweenNumbers
        }m rakt fram`,
      });
    } else {
      steps.push({
        text: `Med kassorna åt din vänstra sida, gå ${
          -cubesToTravelXAxis * distansBetweenNumbers
        }m rakt fram`,
      });
    }
    // Make a turn
    if (cubesToTravelXAxis < 0) {
      steps.push({
        text: `Vid takkub ${startLetter + endNumber}, sväng ${
          moveAgainstCashiers ? "vänster" : "höger"
        }`,
        cube: startLetter + endNumber,
      });
    } else {
      steps.push({
        text: `Vid takkub ${startLetter + endNumber}, sväng ${
          moveAgainstCashiers ? "höger" : "vänster"
        }`,
        cube: startLetter + endNumber,
      });
    }

    // Move from Letter to Letter column
    if (cubesToTravelYAxis > 0) {
      steps.push({
        text: `Gå ${
          cubesToTravelYAxis * distansBetweenLetters
        }m i riktning från Kassorna`,
      });
    } else {
      steps.push({
        text: `Gå ${
          -cubesToTravelYAxis * distansBetweenLetters
        }m i riktning mot Kassorna`,
      });
    }
  } else {
    // Move from Letter to Letter column
    if (cubesToTravelYAxis > 0) {
      steps.push({
        text: `Gå ${
          cubesToTravelYAxis * distansBetweenLetters
        }m i riktning från Kassorna`,
      });
    } else {
      steps.push({
        text: `Gå ${
          -cubesToTravelYAxis * distansBetweenLetters
        }m i riktning mot Kassorna`,
      });
    }

    // Make a turn
    if (cubesToTravelXAxis > 0) {
      steps.push({
        text: `Vid takkub ${endLetter + startNumber}, sväng ${
          moveAgainstCashiers ? "vänster" : "höger"
        }`,
        cube: endLetter + startNumber,
      });
    } else {
      steps.push({
        text: `Vid takkub ${endLetter + startNumber}, sväng ${
          moveAgainstCashiers ? "höger" : "vänster"
        }`,
        cube: endLetter + startNumber,
      });
    }

    // Move from Number to Number column
    if (cubesToTravelXAxis > 0) {
      steps.push({
        text: `Gå ${cubesToTravelXAxis * distansBetweenNumbers}m rakt fram`,
      });
    } else {
      steps.push({
        text: `Gå ${-cubesToTravelXAxis * distansBetweenNumbers}m rakt fram`,
      });
    }
  }
 

  var unique: string[] = MOVEMENT_CUBES.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });
 */

  var unique: string[] = possiblePathBeforeDRoute(
    findShortestSimplestPath(start.cube, end.cube),
    end.cube
  ).filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });

  const steps: IStepsInformation[] = calculateDataForDescription(
    unique,
    end.cube
  );

  console.log(steps);
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
          {steps.map((step, index) => (
            <NavigationRow
              key={
                "step_" + index + "_" + step.cube
                  ? step.cube
                  : step?.fromCube
                  ? step?.fromCube + step?.toCube
                  : index
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
          ))}
          <NavigationRow
            initialInformation={false}
            text={end.title}
            end
            cube={end.cube}
          />
        </ol>

        <div className="center">
          <button className="btn white" onClick={() => setShowMaze(!showMaze)}>
            {showMaze ? "Göm navigations karta" : "Visa navigations karta"}
          </button>
        </div>

        {showMaze && (
          <div className="warehouse-layout">
            {mazeData.map((row) => (
              <div className="row">
                {row.cells.map((cell) => {
                  return (
                    <div
                      className={`cell ${unique.includes(cell) ? "move" : ""} ${
                        cell === "-" ? "wall" : ""
                      }
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
        )}
      </div>
    </>
  );
};
