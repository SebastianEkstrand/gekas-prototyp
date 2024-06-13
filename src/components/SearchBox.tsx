import React, { useEffect, useState } from "react";
import nerSVG from "../assets/ner.svg";

import searchSVG from "../assets/search.svg";
import { useNavigate } from "react-router-dom";
import { IProductCategories } from "../data/testData";
import rulltrappa from "../assets/rulltrappa.png";
import { SearchModal } from "./SearchModal/SearchModal";

export interface ISearchBoxProps {
  start: IProductCategories | null;
  end: IProductCategories | null;
  callBack: (start: IProductCategories, end: IProductCategories) => void;
}
export enum AutoCompleteType {
  START = "START",
  END = "END",
  NONE = "NONE",
}

export const SearchBox: React.FC<ISearchBoxProps> = ({
  start,
  end,
  callBack,
}) => {
  const [startPoint, setStartPoint] = useState<IProductCategories | null>(null);
  const [endPoint, setEndPoint] = useState<IProductCategories | null>(null);
  const [autoCompleteMode, setAutoCompleteMode] = useState<AutoCompleteType>(
    AutoCompleteType.NONE
  );
  const navigate = useNavigate();

  const reset = () => {
    setStartPoint(null);
    setEndPoint(null);
  };

  const setStartingPoint = () => {
    setAutoCompleteMode(AutoCompleteType.START);
  };

  const setEndingPoint = () => {
    setAutoCompleteMode(AutoCompleteType.END);
  };

  const closeModal = () => {
    setAutoCompleteMode(AutoCompleteType.NONE);
  };

  const buildURL = () => {
    if (startPoint && endPoint) {
      const url = `?start=${startPoint.title}&end=${endPoint.title}`;
      const escapedUrl = encodeURI(url);
      console.log("escapedUrl", escapedUrl);
      navigate(escapedUrl);
    }
  };

  useEffect(() => {
    if (
      startPoint?.cube &&
      endPoint?.cube &&
      startPoint.cube !== endPoint.cube
    ) {
      callBack(startPoint, endPoint);
      buildURL();
    }
  }, [startPoint, endPoint]);

  useEffect(() => {
    if (start === null && end === null) {
      reset();
    }
  }, [start, end]);

  useEffect(() => {
    if (start !== null) {
      setStartPoint(start);
      setEndPoint(end);
    }
  }, [start]);

  const selectOption = (sel: IProductCategories) => {
    if (autoCompleteMode === AutoCompleteType.START) {
      setStartPoint(sel);
    } else if (autoCompleteMode === AutoCompleteType.END) {
      setEndPoint(sel);
    }

    setAutoCompleteMode(AutoCompleteType.NONE);
  };

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
    <div className="outer-searchbox">
      <div className="inputs-wrapper">
        <div className="inner-row">
          <button onClick={setStartingPoint}>
            {startPoint ? (
              <span className="content-wrapper">
                <span className="cube">{startPoint.cube}</span>
                <span className="text-wrapper">
                  <h4>Startpunkt</h4>
                  <span className="selected-value">{startPoint.title}</span>
                </span>
              </span>
            ) : (
              <span className="content-wrapper">
                <img src={searchSVG} />
                <span>Ange startpunkt</span>
              </span>
            )}
            <img src={nerSVG} alt="Logo" className="arrow" />
          </button>
        </div>
        <div className="inner-row">
          <button onClick={setEndingPoint}>
            {endPoint ? (
              <span className="content-wrapper">
                <span className="cube">{endPoint.cube}</span>
                <span className="text-wrapper">
                  <h4>Slutpunkt</h4>
                  <span className="selected-value">{endPoint.title}</span>
                  {endPoint.icon && returnIcon(endPoint.icon)}
                </span>
              </span>
            ) : (
              <span className="content-wrapper">
                <img src={searchSVG} />
                <span>Ange slutpunkt</span>
              </span>
            )}
            <img src={nerSVG} alt="Logo" className="arrow" />
          </button>
        </div>
      </div>

      <div
        className={`auto-modal ${
          autoCompleteMode !== AutoCompleteType.NONE && "show"
        }`}
      >
        <SearchModal
          start={autoCompleteMode}
          selectOption={selectOption}
          onCloseCallback={closeModal}
        />
      </div>
    </div>
  );
};
