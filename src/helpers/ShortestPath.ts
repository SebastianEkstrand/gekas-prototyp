import { MAX_COLUMNS, NOT_POSSIBLE_MOVEMENTS, dTours } from "../data/testData";
import { letters, positionInAlphabet } from "./positionInAlphabet";

const goY = (
  num: number,
  startLetterPos: number,
  endLetterPos: number
): string[] => {
  const tempMovement: string[] = [];

  /// CREATING MOVEMENT PATH Y-Axis
  if (startLetterPos < endLetterPos) {
    for (var i = startLetterPos; i <= endLetterPos; i++) {
      tempMovement.push(`${letters[i - 1].toUpperCase()}${num}`);
    }
  } else {
    for (var i = startLetterPos; i >= endLetterPos; i--) {
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
  console.log(startLetter, startLetterPos);
  const tempMovement: string[] = [];

  /// CREATING MOVEMENT PATH X-Axis
  if (startNumber < endNumber) {
    for (var i = startNumber; i <= endNumber; i++) {
      tempMovement.push(`${startLetter}${i}`);
    }
  } else {
    for (var i = startNumber; i >= endNumber; i--) {
      tempMovement.push(`${startLetter}${i}`);
    }
  }

  /// CREATING MOVEMENT PATH Y-Axis
  if (startLetterPos < endLetterPos) {
    for (var i = startLetterPos; i <= endLetterPos; i++) {
      tempMovement.push(`${letters[i - 1]?.toUpperCase()}${endNumber}`);
    }
  } else {
    for (var i = startLetterPos; i >= endLetterPos; i--) {
      tempMovement.push(`${letters[i - 1]?.toUpperCase()}${endNumber}`);
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
    for (var i = startLetterPos; i <= endLetterPos; i++) {
      tempMovement.push(`${letters[i - 1].toUpperCase()}${startNumber}`);
    }
  } else {
    for (var i = startLetterPos; i >= endLetterPos; i--) {
      tempMovement.push(`${letters[i - 1].toUpperCase()}${startNumber}`);
    }
  }

  /// CREATING MOVEMENT PATH X-Axis
  if (startNumber < endNumber) {
    for (var i = startNumber; i <= endNumber; i++) {
      tempMovement.push(`${endLetter}${i}`);
    }
  } else {
    for (var i = startNumber; i >= endNumber; i--) {
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

export const findShortestSimplestAlternativePathXY = (
  startNumber: number,
  endNumber: number,
  startLetterPos: number,
  endLetterPos: number
): string[] => {
  let alternativeAbove: string[] = [];
  let alternativeBelow: string[] = [];
  let alternativeEndAbove: string[] = [];
  let alternativeEndBelow: string[] = [];

  if (startLetterPos + 1 <= MAX_COLUMNS) {
    alternativeAbove = goXThenY(
      letters[startLetterPos],
      startNumber,
      endNumber,
      startLetterPos + 1,
      endLetterPos
    );
  }

  if (startLetterPos - 1 > 0) {
    alternativeBelow = goXThenY(
      letters[startLetterPos - 2],
      startNumber,
      endNumber,
      startLetterPos - 1,
      endLetterPos
    );
  }

  if (endLetterPos + 1 <= MAX_COLUMNS) {
    alternativeEndAbove = goXThenY(
      letters[startLetterPos],
      startNumber,
      endNumber,
      startLetterPos,
      endLetterPos + 1
    );
  }

  if (endLetterPos - 1 > 0) {
    alternativeEndBelow = goXThenY(
      letters[startLetterPos - 2],
      startNumber,
      endNumber,
      startLetterPos,
      endLetterPos - 1
    );
  }

  const obstaclesFoundAbove: number = countCommonItems(
    alternativeAbove,
    NOT_POSSIBLE_MOVEMENTS
  );
  const foundObstaclesBelow: number = countCommonItems(
    alternativeBelow,
    NOT_POSSIBLE_MOVEMENTS
  );

  const obstaclesFoundEndAbove: number = countCommonItems(
    alternativeEndAbove,
    NOT_POSSIBLE_MOVEMENTS
  );
  const foundObstaclesEndBelow: number = countCommonItems(
    alternativeEndBelow,
    NOT_POSSIBLE_MOVEMENTS
  );

  if (
    alternativeAbove.length > 0 ||
    alternativeBelow.length > 0 ||
    alternativeEndAbove.length > 0 ||
    alternativeEndBelow.length > 0
  ) {
    if (foundObstaclesBelow === 0 && obstaclesFoundAbove === 0) {
      if (
        alternativeBelow.length > 0 &&
        alternativeBelow.length > 0 &&
        alternativeBelow.length < alternativeAbove.length
      ) {
        alternativeBelow.unshift(letters[startLetterPos - 1] + startNumber);

        return alternativeBelow;
      } else {
        alternativeAbove.unshift(letters[startLetterPos - 1] + startNumber);

        return alternativeAbove;
      }
    } else if (alternativeBelow.length > 0 && foundObstaclesBelow === 0) {
      alternativeBelow.unshift(letters[startLetterPos - 1] + startNumber);

      return alternativeBelow;
    } else if (alternativeAbove.length > 0 && obstaclesFoundAbove === 0) {
      alternativeAbove.unshift(letters[startLetterPos - 1] + startNumber);

      return alternativeAbove;
    } else if (foundObstaclesEndBelow === 0 && obstaclesFoundEndAbove === 0) {
      if (
        alternativeEndBelow.length > 0 &&
        alternativeEndBelow.length > 0 &&
        alternativeEndBelow.length < alternativeEndAbove.length
      ) {
        alternativeEndBelow.unshift(letters[startLetterPos - 1] + startNumber);

        return alternativeEndBelow;
      } else {
        alternativeEndAbove.unshift(letters[startLetterPos - 1] + startNumber);

        return alternativeEndAbove;
      }
    } else if (alternativeEndBelow.length > 0 && foundObstaclesEndBelow === 0) {
      alternativeEndBelow.unshift(letters[startLetterPos - 1] + startNumber);

      return alternativeEndBelow;
    } else if (alternativeEndAbove.length > 0 && obstaclesFoundEndAbove === 0) {
      alternativeEndAbove.unshift(letters[startLetterPos - 1] + startNumber);

      return alternativeEndAbove;
    }
  }

  return [];
};

export const findShortestSimplestAlternativePathYX = (
  startNumber: number,
  endNumber: number,
  startLetterPos: number,
  endLetterPos: number
): string[] => {
  let alternativeLeft: string[] = [];
  let alternativeRight: string[] = [];
  let alternativeEndLeft: string[] = [];
  let alternativeEndRight: string[] = [];

  if (startNumber - 1 > 0) {
    alternativeLeft = goYThenX(
      letters[endLetterPos - 1],
      startNumber - 1,
      endNumber,
      startLetterPos,
      endLetterPos
    );
  }

  if (startNumber + 1 <= MAX_COLUMNS) {
    alternativeRight = goYThenX(
      letters[endLetterPos - 1],
      startNumber + 1,
      endNumber,
      startLetterPos,
      endLetterPos
    );
  }

  if (endNumber - 1 > 0) {
    alternativeEndLeft = goYThenX(
      letters[endLetterPos - 1],
      startNumber,
      endNumber - 1,
      startLetterPos,
      endLetterPos
    );
  }

  if (endNumber + 1 <= MAX_COLUMNS) {
    alternativeEndRight = goYThenX(
      letters[endLetterPos - 1],
      startNumber,
      endNumber + 1,
      startLetterPos,
      endLetterPos
    );
  }

  console.log(
    "alternativeLeft",
    alternativeLeft,
    "alternativeRight",
    alternativeRight
  );

  console.log(
    "alternativeEndLeft",
    alternativeEndLeft,
    "alternativeEndRight",
    alternativeEndRight
  );

  const obstaclesFoundLeft: number = countCommonItems(
    alternativeLeft,
    NOT_POSSIBLE_MOVEMENTS
  );
  const foundObstaclesRight: number = countCommonItems(
    alternativeRight,
    NOT_POSSIBLE_MOVEMENTS
  );

  const obstaclesFoundEndLeft: number = countCommonItems(
    alternativeEndLeft,
    NOT_POSSIBLE_MOVEMENTS
  );
  const foundObstaclesEndRight: number = countCommonItems(
    alternativeEndRight,
    NOT_POSSIBLE_MOVEMENTS
  );

  console.log(
    "obstaclesFoundLeft",
    obstaclesFoundLeft,
    "foundObstaclesRight",
    foundObstaclesRight
  );

  console.log(
    "obstaclesFoundEndLeft",
    obstaclesFoundEndLeft,
    "foundObstaclesEndRight",
    foundObstaclesEndRight
  );

  if (
    alternativeRight.length > 0 ||
    alternativeLeft.length > 0 ||
    alternativeEndRight.length > 0 ||
    alternativeEndLeft.length > 0
  ) {
    if (obstaclesFoundLeft === 0 && foundObstaclesRight === 0) {
      if (alternativeLeft.length < alternativeRight.length) {
        alternativeLeft.unshift(letters[startLetterPos - 1] + startNumber);
        return alternativeLeft;
      } else {
        alternativeRight.unshift(letters[startLetterPos - 1] + startNumber);
        return alternativeRight;
      }
    } else if (obstaclesFoundLeft === 0 && alternativeLeft.length > 0) {
      alternativeLeft.unshift(letters[startLetterPos - 1] + startNumber);

      return alternativeLeft;
    } else if (foundObstaclesRight === 0 && alternativeRight.length > 0) {
      alternativeRight.unshift(letters[startLetterPos - 1] + startNumber);

      return alternativeRight;
    } else if (obstaclesFoundEndLeft === 0 && foundObstaclesEndRight === 0) {
      if (alternativeEndRight.length < alternativeRight.length) {
        alternativeEndRight.unshift(letters[startLetterPos - 1] + startNumber);
        return alternativeEndRight;
      } else {
        alternativeEndLeft.unshift(letters[startLetterPos - 1] + startNumber);
        return alternativeEndLeft;
      }
    } else if (foundObstaclesEndRight === 0 && alternativeEndRight.length > 0) {
      alternativeEndRight.unshift(letters[startLetterPos - 1] + startNumber);

      return alternativeEndRight;
    } else if (obstaclesFoundEndLeft === 0 && alternativeEndLeft.length > 0) {
      alternativeEndLeft.unshift(letters[startLetterPos - 1] + startNumber);

      return alternativeEndLeft;
    } else {
      console.log("Can't do it");
    }
  }
  return [];
};

export const findShortestSimplestPath = (
  startPoint: string,
  endPoint: string
): string[] => {
  let tempMovementXY: string[] = [];
  let tempMovementYX: string[] = [];
  let choosenMovement: string[] = [];
  const startLetter = startPoint?.substring(0, 1) ?? "";
  const endLetter = endPoint?.substring(0, 1) ?? "";
  const startNumber = parseInt(startPoint?.substring(1) ?? "1");
  const endNumber = parseInt(endPoint?.substring(1) ?? "1");
  const startLetterPos: number = positionInAlphabet(startLetter.toUpperCase());
  const endLetterPos: number = positionInAlphabet(endLetter.toUpperCase());

  console.log(startPoint, endPoint, startLetter, endLetter);

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

  console.log(
    "End for Alt tempMovementXY: ",
    tempMovementXY[tempMovementXY.length - 1]
  );
  console.log(
    "End for Alt foundObstaclesYX: ",
    tempMovementYX[tempMovementYX.length - 1]
  );

  console.log(
    "obstaclesFoundXY",
    obstaclesFoundXY,
    "foundObstaclesYX",
    foundObstaclesYX
  );

  choosenMovement =
    obstaclesFoundXY <= foundObstaclesYX ? tempMovementXY : tempMovementYX;

  if (foundObstaclesYX > 0 && obstaclesFoundXY > 0) {
    const tempX: string[] = findShortestSimplestAlternativePathXY(
      startNumber,
      endNumber,
      startLetterPos,
      endLetterPos
    );
    const tempY: string[] = findShortestSimplestAlternativePathYX(
      startNumber,
      endNumber,
      startLetterPos,
      endLetterPos
    );

    console.log("tempX", tempX, "tempY", tempY);

    if (tempX.length > 0 && tempY.length > 0) {
      choosenMovement = tempX.length < tempY.length ? tempX : tempY;
    } else if (tempX.length > 0) {
      choosenMovement = tempX;
    } else if (tempY.length > 0) {
      choosenMovement = tempY;
    }
  }

  console.log("choosenMovement", choosenMovement);

  return choosenMovement.length > 0
    ? choosenMovement
    : obstaclesFoundXY < foundObstaclesYX
    ? tempMovementXY
    : tempMovementYX;
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

  console.log("simplestPath:", simplestPath, endPoint);

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
