import { NOT_POSSIBLE_MOVEMENTS, dTours } from "../data/testData";
import { letters, positionInAlphabet } from "./positionInAlphabet";

const goY = (
  num: number,
  startLetterPos: number,
  endLetterPos: number
): string[] => {
  const tempMovement: string[] = [];

  /// CREATING MOVEMENT PATH Y-Axis
  if (startLetterPos < endLetterPos) {
    for (var i = startLetterPos; i < endLetterPos; i++) {
      tempMovement.push(`${letters[i - 1].toUpperCase()}${num}`);
    }
  } else {
    for (var i = startLetterPos; i > endLetterPos; i--) {
      tempMovement.push(`${letters[i - 1].toUpperCase()}${num}`);
    }
  }

  return tempMovement;
};

const goXThenY = (
  startLetter: string,
  startNumber: number,
  endNumber: number,
  startLetterPos: number,
  endLetterPos: number
): string[] => {
  const tempMovement: string[] = [];

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

  return tempMovement;
};

const goYThenX = (
  endLetter: string,
  startNumber: number,
  endNumber: number,
  startLetterPos: number,
  endLetterPos: number
): string[] => {
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

const countCommonItems = (array1: string[], array2: string[]) => {
  let count = 0;

  array1.forEach((item) => {
    if (array2.includes(item)) {
      count++;
    }
  });

  return count;
};

export const findShortestSimplestPath = (
  startPoint: string,
  endPoint: string
): string[] => {
  let tempMovementXY: string[] = [];
  let tempMovementYX: string[] = [];
  const startLetter = startPoint?.substring(0, 1) ?? "";
  const endLetter = endPoint?.substring(0, 1) ?? "";
  const startNumber = parseInt(startPoint?.substring(1) ?? "1");
  const endNumber = parseInt(endPoint?.substring(1) ?? "1");
  const startLetterPos: number = positionInAlphabet(startLetter);
  const endLetterPos: number = positionInAlphabet(endLetter);

  tempMovementXY = goXThenY(
    startLetter,
    startNumber,
    endNumber,
    startLetterPos,
    endLetterPos
  );

  tempMovementYX = goYThenX(
    endLetter,
    startNumber,
    endNumber,
    startLetterPos,
    endLetterPos
  );

  const obstaclesFoundXY: number = countCommonItems(
    tempMovementXY,
    NOT_POSSIBLE_MOVEMENTS
  );
  const foundObstaclesYX: number = countCommonItems(
    tempMovementYX,
    NOT_POSSIBLE_MOVEMENTS
  );

  return obstaclesFoundXY < foundObstaclesYX ? tempMovementXY : tempMovementYX;
};

const lastDTourStepInSameColumn = (array: string[], num: number): string => {
  const filteredArray = array.filter((item) => {
    return item.includes(num.toString());
  });

  // Return the filtered array
  return filteredArray[0];
};

export const addOnDTour = (
  currentPath: string[],
  simplestPath: string[],
  endPoint: string
): string[] => {
  let possiblePath: string[] = [...currentPath];
  let selectedDTour: string[] = [];
  const possibleContinuePath: string[] = [...simplestPath].slice(
    simplestPath.indexOf(possiblePath[possiblePath.length - 1]) + 1
  );
  const columnNumber: number = parseInt(endPoint?.substring(1) ?? "1");
  const rowLetter: string = endPoint?.substring(0, 1) ?? "";

  dTours.forEach((dTour) => {
    if (dTour.steps.includes(possiblePath[possiblePath.length - 1])) {
      selectedDTour = dTour.steps;
    }
  });

  let addToPath: boolean = false;
  const lastStepInSameColumn: string = lastDTourStepInSameColumn(
    [...selectedDTour].reverse(),
    columnNumber
  );
  selectedDTour.forEach((step) => {
    if (currentPath[currentPath.length - 1] === step) {
      addToPath = true;
    }

    if (addToPath) {
      possiblePath.push(step);
    }

    if (possibleContinuePath.includes(step)) {
      addToPath = false;
    } else if (step === lastStepInSameColumn) {
      addToPath = false;
    }
  });

  const lastSteps: string[] = goY(
    columnNumber,
    positionInAlphabet(
      possiblePath[possiblePath.length - 1]?.substring(0, 1) ?? ""
    ),
    positionInAlphabet(rowLetter)
  );
  possiblePath = [...possiblePath.concat(lastSteps)];

  return possiblePath;
};

export const possiblePathBeforeDRoute = (
  simplestPath: string[],
  endPoint: string
): string[] => {
  let possiblePath: string[] = [];
  let continueToAdd: boolean = true;

  simplestPath.forEach((step) => {
    if (!NOT_POSSIBLE_MOVEMENTS.includes(step) && continueToAdd) {
      possiblePath.push(step);
    } else {
      continueToAdd = false;
    }
  });

  if (simplestPath.length !== possiblePath.length) {
    possiblePath = addOnDTour(possiblePath, simplestPath, endPoint);
  }

  return possiblePath;
};
