import React from "react";

import {
  IProductCategories,
  IRowCells,
  IVisitedCells,
  mazeData,
  visitedData,
} from "../data/testData";
import { NavigationRow } from "./NavigationRow";

export interface INavigationPresenterProps {
  start: IProductCategories;
  end: IProductCategories;
}

export interface IStepsInformation {
  text: string;
  cube?: string;
}

export const NavigationPresenter: React.FC<INavigationPresenterProps> = ({
  start,
  end,
}) => {
  const findCellPosition = (cube: string): number[] => {
    let yVal: number = 0;
    let xVal: number = 0;
    const startingLetter: string = cube.substring(0, 1);
    const cellNumber: number = parseInt(cube.substring(1));

    console.log(startingLetter, cellNumber);

    mazeData.forEach((row, index) => {
      if (row.rowName === startingLetter) {
        yVal = index;
      }
    });

    xVal = mazeData[yVal].cells[cellNumber - 1] !== "-" ? cellNumber - 1 : -1;

    console.log(mazeData[yVal].cells[xVal]);

    return [yVal, xVal];
  };

  /*
  const closestPath = (start: string, end: string): number => {
    const m = mazeData.length - 1;
    const n = mazeData[0].cells.length - 1;

    const startCell: number[] = findCellPosition(start);
    const endCell: number[] = findCellPosition(end);

    console.log(startCell, endCell);

    const queue = [[[startCell[1], startCell[0]]]];
    const okMovesToMake = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    mazeData[startCell[0]].cells[startCell[1]] = "+";
    let distance = 0;

    while (queue.length > 0) {
      const tasks = queue.pop() ?? [];
      const nextTasks = [];

      distance += 1;

      for (let [x, y] of tasks) {
        for (let [moveX, moveY] of okMovesToMake) {
          const x2 = x + moveX;
          const y2 = y + moveY;

          console.log(x2, y2);

          if (x2 >= 0 && y2 >= 0 && x2 <= n && y2 <= m) {
            if (mazeData[y2].cells[x2] !== "+") {
              nextTasks.push([x2, y2]);

              mazeData[y2].cells[x2] = "+";

              if (x2 === 0 || y2 === 0 || x2 === n || y2 === m) {
                return distance;
              }
            }
          }
        }
      }

      if (nextTasks.length > 0) {
        queue.push(nextTasks);
      }
    }

    return -1;
  };*/

  const isSafe = (
    mat: IRowCells[],
    visited: IVisitedCells[],
    x: number,
    y: number
  ) => {
    return (
      x >= 0 &&
      x < mat.length &&
      y >= 0 &&
      y < mat[0].cells.length &&
      mat[x].cells[y] !== "-" &&
      !visited[x].cells[y]
    );
  };

  const findShortestPath = (
    mat: IRowCells[],
    visited: IVisitedCells[],
    i: number,
    j: number,
    x: number,
    y: number,
    min_dist: number,
    dist: number
  ) => {
    console.log("X3");
    if (i == x && j == y) {
      min_dist = Math.min(dist, min_dist);
      return min_dist;
    }

    // set (i, j) cell as visited
    visited[i].cells[j] = true;
    // go to the bottom cell
    if (isSafe(mat, visited, i + 1, j)) {
      min_dist = findShortestPath(
        mat,
        visited,
        i + 1,
        j,
        x,
        y,
        min_dist,
        dist + 1
      );
    }
    console.log("X5");
    // go to the right cell
    if (isSafe(mat, visited, i, j + 1)) {
      min_dist = findShortestPath(
        mat,
        visited,
        i,
        j + 1,
        x,
        y,
        min_dist,
        dist + 1
      );
    }
    console.log("X6");
    // go to the top cell
    if (isSafe(mat, visited, i - 1, j)) {
      min_dist = findShortestPath(
        mat,
        visited,
        i - 1,
        j,
        x,
        y,
        min_dist,
        dist + 1
      );
    }
    console.log("X7");
    // go to the left cell
    if (isSafe(mat, visited, i, j - 1)) {
      min_dist = findShortestPath(
        mat,
        visited,
        i,
        j - 1,
        x,
        y,
        min_dist,
        dist + 1
      );
    }
    console.log("X8");
    // backtrack: remove (i, j) from the visited matrix
    visited[i].cells[j] = false;
    return min_dist;
  };

  // Wrapper over findShortestPath() function
  const findShortestPathLength = (
    mat: IRowCells[],
    start: string,
    end: string
  ) => {
    const startCell: number[] = findCellPosition(start);
    const endCell: number[] = findCellPosition(end);

    console.log(
      mat.length,
      mat[startCell[0]].cells[startCell[1]],
      mat[endCell[0]].cells[endCell[1]]
    );
    if (
      mat.length === 0 ||
      mat[startCell[0]].cells[startCell[1]] === "-" ||
      mat[endCell[0]].cells[endCell[1]] === "-"
    ) {
      return -1;
    } else {
      console.log("continue");
    }

    // cells
    const visited: IVisitedCells[] = visitedData;

    console.log(visited);
    let dist = Number.MAX_SAFE_INTEGER;
    dist = findShortestPath(
      mat,
      visited,
      startCell[1],
      startCell[0],
      endCell[1],
      endCell[0],
      dist,
      0
    );

    console.log(dist, visited);

    if (dist != Number.MAX_SAFE_INTEGER) return dist;
    return -1;
  };

  return <>{findShortestPathLength(mazeData, start.cube, end.cube)}</>;
};
