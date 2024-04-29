import React, { useEffect, useRef, useState } from "react";
import nerSVG from "../assets/ner.svg";
import closeSVG from "../assets/close.svg";
import searchSVG from "../assets/search.svg";
import { IProductCategories, TestData } from "../data/testData";

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

  useEffect(() => {
    if (startPoint?.cube && endPoint?.cube) {
      callBack(startPoint, endPoint);
    }
  }, [startPoint, endPoint]);

  useEffect(() => {
    if (start === null && end === null) {
      reset();
    }
  }, [start, end]);

  useEffect(() => {
    // Focus the input field when the component mounts

    if (autoCompleteMode !== AutoCompleteType.NONE && inputRef?.current) {
      setTimeout(() => {
        //@ts-ignore
        inputRef?.current?.focus();
      }, 350);
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

  return (
    <>
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
            value={search}
            ref={inputRef}
            onChange={(event) => {
              onChangeHandler(event.target.value);
            }}
            placeholder="Ange produktkategori eller Takkub"
          />
        </div>

        <div className="found-items">
          <ul>
            {found &&
              found.map((row) => (
                <li key={row.key}>
                  <button onClick={() => selectOption(row)}>
                    {row.title}
                    <span className="area">{row.area}</span>
                    <span className="cube">{row.cube}</span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};