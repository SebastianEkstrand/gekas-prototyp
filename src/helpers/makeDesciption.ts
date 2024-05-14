import { IStepsInformation } from "../components/NavigationPresenter";
import { IProductCategories } from "../data/testData";
import { positionInAlphabet } from "./positionInAlphabet";

export enum Direction {
  RIGHT = "RIGHT",
  LEFT = "LEFT",
  FORWARD = "FORWARD",
}

export enum Kassorna {
  FRONT = "Med kassorna framför dig",
  RIGHT = "Med kassorna åt din högra sida",
  LEFT = "Med kassorna åt din vänstra sida",
  BACK = "Med kassorna bakom dig",
}

const getStartDirection = (current: string, next: string): Kassorna => {
  const currentRowIndex: number =
    positionInAlphabet(current.substring(0, 1)) - 1;
  const currentColumIndex: number = parseInt(current.substring(1));

  const nextRowIndex: number = positionInAlphabet(next.substring(0, 1)) - 1;
  const nextColumIndex: number = parseInt(next.substring(1));

  console.log(nextRowIndex, currentRowIndex, nextColumIndex, currentColumIndex);

  if (nextRowIndex > currentRowIndex && nextColumIndex === currentColumIndex) {
    return Kassorna.BACK;
  } else if (
    nextRowIndex < currentRowIndex &&
    nextColumIndex === currentColumIndex
  ) {
    return Kassorna.FRONT;
  } else if (
    nextRowIndex === currentRowIndex &&
    nextColumIndex > currentColumIndex
  ) {
    return Kassorna.RIGHT;
  } else if (
    nextRowIndex === currentRowIndex &&
    nextColumIndex < currentColumIndex
  ) {
    return Kassorna.LEFT;
  }

  return Kassorna.BACK;
};

const directionToTurn = (
  current: string,
  next: String,
  prev: String
): Direction => {
  const currentRowIndex: number =
    positionInAlphabet(current.substring(0, 1)) - 1;
  const currentColumIndex: number = parseInt(current.substring(1));

  const prevRowIndex: number = positionInAlphabet(prev?.substring(0, 1)) - 1;
  const prevColumIndex: number = parseInt(prev?.substring(1));

  const nextRowIndex: number = positionInAlphabet(next.substring(0, 1)) - 1;
  const nextColumIndex: number = parseInt(next.substring(1));

  //console.log("Current:", currentRowIndex, currentColumIndex);

  console.log(
    current,
    next,
    "nextRowIndex > currentRowIndex:",
    nextRowIndex > currentRowIndex,
    "nextColumIndex > currentColumIndex",
    nextColumIndex > currentColumIndex
  );

  if (nextRowIndex > currentRowIndex && nextColumIndex > currentColumIndex) {
    console.log("AA", current, next, Direction.RIGHT);
    return Direction.RIGHT;
  } else if (
    nextRowIndex > currentRowIndex &&
    nextColumIndex === currentColumIndex
  ) {
    console.log("BB", current, next, Direction.RIGHT);
    return prevColumIndex < currentColumIndex
      ? Direction.LEFT
      : Direction.RIGHT;
  } else if (
    nextRowIndex < currentRowIndex &&
    nextColumIndex === currentColumIndex
  ) {
    console.log("CC", current, next, Direction.RIGHT);
    return prevColumIndex < currentColumIndex
      ? Direction.RIGHT
      : Direction.LEFT;
  } else if (
    nextRowIndex === currentRowIndex &&
    nextColumIndex > currentColumIndex
  ) {
    console.log("DD", current, next, Direction.LEFT);
    return prevRowIndex < currentRowIndex ? Direction.RIGHT : Direction.LEFT;
  } else if (
    nextRowIndex === currentRowIndex &&
    nextColumIndex < currentColumIndex
  ) {
    console.log("EE", current, next, Direction.RIGHT);
    return prevRowIndex < currentRowIndex ? Direction.LEFT : Direction.RIGHT;
  }

  return Direction.FORWARD;
};

const moveInXAxis = (current: string, next: String): boolean => {
  const currentRowIndex: number =
    positionInAlphabet(current.substring(0, 1)) - 1;
  const currentColumIndex: number = parseInt(current.substring(1));

  const nextRowIndex: number = positionInAlphabet(next.substring(0, 1)) - 1;
  const nextColumIndex: number = parseInt(next.substring(1));

  /*console.log(
    current.substring(0, 1),
    next.substring(0, 1),
    "nextRowIndex:",
    nextRowIndex,
    "currentRowIndex",
    currentRowIndex
  );*/

  if (nextRowIndex === currentRowIndex) {
    return true;
  } else if (currentColumIndex !== nextColumIndex) {
    return true;
  }

  return false;
};

export const calculateDataForDescription = (
  calculateSteps: string[],
  end: IProductCategories
) => {
  const steps: IStepsInformation[] = [];

  let lastStepLetter: string = "";
  let lastStepNumber: number = 0;
  let cubesInDirection: number = 0;
  let lastStep: string = "";
  let cubeBeforeTurn: string = calculateSteps[0];

  console.log(calculateSteps);

  calculateSteps.forEach((step, index) => {
    //console.log(step);

    const fromNumber: number =
      cubeBeforeTurn.length > 0 ? parseInt(cubeBeforeTurn?.substring(1)) : 0;
    const toNumber: number = parseInt(calculateSteps[index - 1]?.substring(1));

    if (step?.substring(0, 1) === lastStepLetter) {
      cubesInDirection = cubesInDirection + 1;
      //console.log("if", cubesInDirection);
    } else if (parseInt(step.substring(1)) === lastStepNumber) {
      cubesInDirection = cubesInDirection + 1;
      //console.log("else if", cubesInDirection);
    } else {
      //console.log(lastStepLetter, lastStepNumber);

      //cubesInDirection = cubesInDirection + 1;
      //console.log("else", cubesInDirection);
      lastStepLetter = step.substring(0, 1);
      lastStepNumber = parseInt(step.substring(1));

      console.log("Steps before turn:", toNumber - fromNumber);

      const fromLessToMore = toNumber - fromNumber;
      const fromMoreToLess = fromNumber - toNumber;

      const amountToAdd = fromLessToMore > 0 ? fromLessToMore : fromMoreToLess;

      if (lastStep !== "") {
        steps.push({
          cubesInDirection: amountToAdd > 0 ? amountToAdd : cubesInDirection,
          cube: "",
          fromCube: cubeBeforeTurn,
          toCube: calculateSteps[index - 1],
          direction: Direction.FORWARD,
          xAxis: moveInXAxis(cubeBeforeTurn, calculateSteps[index - 1]),
          startDirection: getStartDirection(
            cubeBeforeTurn,
            calculateSteps[index - 1]
          ),
        });

        cubesInDirection = 0;
        cubeBeforeTurn = calculateSteps[index - 1];

        steps.push({
          cubesInDirection: 0,
          cube: lastStep,
          fromCube: cubeBeforeTurn,
          toCube: calculateSteps[index],
          direction: directionToTurn(lastStep, step, calculateSteps[index - 2]),
          xAxis: moveInXAxis(lastStep, step),
        });

        cubesInDirection = 0;
      }
    }
    lastStep = step;
  });

  steps.push({
    cubesInDirection: cubesInDirection + 1,
    cube: "",
    direction: directionToTurn(
      lastStep,
      calculateSteps[calculateSteps.length - 1]
    ),
    fromCube: cubeBeforeTurn,
    toCube: end.cube,
    xAxis: moveInXAxis(lastStep, calculateSteps[calculateSteps.length - 1]),
    startDirection: getStartDirection(cubeBeforeTurn, calculateSteps[1]),
  });

  return steps;
};
