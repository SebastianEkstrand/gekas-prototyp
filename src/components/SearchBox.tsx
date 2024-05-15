import React, { useEffect, useRef, useState } from "react";
import nerSVG from "../assets/ner.svg";
import closeSVG from "../assets/close.svg";
import searchSVG from "../assets/search.svg";
import { useNavigate } from "react-router-dom";
import { IProductCategories, TestData, hintCubes } from "../data/testData";
import rulltrappa from "../assets/rulltrappa.png";

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
  const [search, setSearch] = useState<string>("");
  const [startPoint, setStartPoint] = useState<IProductCategories | null>(null);
  const [endPoint, setEndPoint] = useState<IProductCategories | null>(null);
  const [found, setFound] = useState<IProductCategories[]>([]);
  const [autoCompleteMode, setAutoCompleteMode] = useState<AutoCompleteType>(
    AutoCompleteType.NONE
  );
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const reset = () => {
    setStartPoint(null);
    setEndPoint(null);
  };

  const setStartingPoint = () => {
    setAutoCompleteMode(AutoCompleteType.START);
    setSearch("");
  };

  const setEndingPoint = () => {
    setAutoCompleteMode(AutoCompleteType.END);
    setSearch("");
  };

  const closeModal = () => {
    setAutoCompleteMode(AutoCompleteType.NONE);
  };

  const onChangeHandler = (s: string) => {
    setSearch(s);
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

  useEffect(() => {
    // Focus the input field when the component mounts

    if (autoCompleteMode !== AutoCompleteType.NONE && inputRef?.current) {
      setTimeout(() => {
        //@ts-ignore
        inputRef?.current?.focus();
      }, 500);
    }
  }, [autoCompleteMode]);

  useEffect(() => {
    if (search.length >= 2) {
      const matchingCategories: IProductCategories[] = TestData.filter(
        (cat) => {
          if (
            cat.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return true;
          } else if (
            cat.cube.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return true;
          } else if (
            cat.keywords
              ?.toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        }
      );
      setFound(matchingCategories);
    } else {
      setFound([]);
    }
  }, [search]);

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
        <div className="modal-inner">
          <button className="close-btn" onClick={closeModal}>
            <img src={closeSVG} alt="Stäng" />
          </button>
          <h3>
            {autoCompleteMode === AutoCompleteType.START
              ? "Ange startpunkt"
              : autoCompleteMode === AutoCompleteType.END
              ? "Ange slutpunkt"
              : ""}
          </h3>

          <div className="search-wrapper">
            <img src={searchSVG} />
            <input
              className="auto-complete-input"
              type="text"
              autoFocus
              value={search}
              ref={inputRef}
              onChange={(event) => {
                onChangeHandler(event.target.value);
              }}
              placeholder="Sök produktkategori eller Takkub"
            />
          </div>

          <div className="found-items">
            <ul>
              {found && found.length > 0 ? (
                found.map((row) => (
                  <li key={row.key}>
                    <button onClick={() => selectOption(row)}>
                      {row.title}
                      <span className="area">{row.area}</span>
                      {row.cube.length > 3 ? (
                        <span className="floor">{row.cube}</span>
                      ) : (
                        <>
                          {row.icon && returnIcon(row.icon)}
                          <span className="cube">{row.cube}</span>
                        </>
                      )}
                    </button>
                  </li>
                ))
              ) : (
                <>
                  <li className="message">
                    {search.length > 1 && "Inget sökresultat hittades"}
                  </li>
                  <li className="title-row">
                    <h4>Populära produktkategorier</h4>
                  </li>{" "}
                  {hintCubes.map((row) => (
                    <li key={row.key}>
                      <button onClick={() => selectOption(row)}>
                        {row.title}
                        <span className="area">{row.area}</span>
                        <span className="cube">{row.cube}</span>
                      </button>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
