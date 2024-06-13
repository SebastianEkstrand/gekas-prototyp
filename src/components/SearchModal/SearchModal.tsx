import "./SearchModal.scss";
import closeSVG from "../../assets/close.svg";
import timeSVG from "../../assets/time.svg";
import searchSVG from "../../assets/search.svg";
import cartSVG from "../../assets/cart.svg";
import nerSVG from "../../assets/ner.svg";
import { useEffect, useRef, useState } from "react";
import {
  IProductCategories,
  TestData,
  hintCubes,
  sortiment,
} from "../../data/testData";
import { NavigationPoint } from "../NavigationPoint/NavigationPoint";
import { Category } from "../Category/Category";
import { AutoCompleteType } from "../SearchBox";

export interface ISearchModalProps {
  onCloseCallback: () => void;
  selectOption: (sel: IProductCategories) => void;
  start: AutoCompleteType;
}

export const SearchModal: React.FC<ISearchModalProps> = ({
  onCloseCallback,
  selectOption,
  start,
}) => {
  const [search, setSearch] = useState<string>("");
  const [showAll, setShowAll] = useState(false);
  const [found, setFound] = useState<IProductCategories[]>([]);
  const inputRef = useRef(null);
  const MIN_CHAR_BEFORE_SEARCH = 2;
  const SHOW_MAX_DEFAULT = 5;

  const closeModal = () => {
    setFound([]);
    setShowAll(false);
    setSearch("");
    onCloseCallback && onCloseCallback();
  };

  const onChangeHandler = (s: string) => {
    setSearch(s.trimStart());
    setShowAll(false);
  };

  const onSelect = (row: IProductCategories) => {
    selectOption(row);
    closeModal();
  };

  useEffect(() => {
    // Focus the input field when the component mounts

    if (start !== AutoCompleteType.NONE && inputRef?.current) {
      setTimeout(() => {
        //@ts-expect-error
        inputRef?.current?.focus();
      }, 500);
    }
  }, [start]);

  const isFirstCharLetterSecondCharNumber = (str: string) => {
    // Define the regex pattern
    const pattern = /^[a-zA-Z][0-9]/;

    // Test the string against the pattern
    return pattern.test(str);
  };

  useEffect(() => {
    if (search.length >= MIN_CHAR_BEFORE_SEARCH) {
      const showOnlyTakkuber: boolean =
        isFirstCharLetterSecondCharNumber(search);
      const matchingCategories: IProductCategories[] = TestData.filter(
        (cat) => {
          if (showOnlyTakkuber) {
            return (
              cat.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) &&
              cat.cube.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            );
          } else if (
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

  const SearchDefault = (
    <div className="search-default">
      <section>
        <h4>
          <img src={timeSVG} /> Senast Sökta
        </h4>
        <ul>
          {hintCubes.map((row) => (
            <li key={row.key}>
              <NavigationPoint
                onClick={() => {
                  onSelect(row);
                }}
                title={row.title}
                subtitle={row.area[0]}
                cube={row.cube}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h4>
          <img src={cartSVG} /> Sortiment
        </h4>
        <ul className="full-size">
          {sortiment.map((row) => (
            <li key={row.title}>
              <Category
                title={row.title}
                items={row.items}
                selectOption={selectOption}
                lineColor={row.color}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );

  return (
    <div className="search-modal-inner">
      <div className="top">
        <button className="close-btn" onClick={closeModal}>
          <img src={closeSVG} alt="Stäng" />
        </button>
        <h3>
          {start === AutoCompleteType.START
            ? "Ange startpunkt"
            : "Ange slutpunkt"}
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
          {search && search.length >= MIN_CHAR_BEFORE_SEARCH && (
            <button onClick={() => setSearch("")} className={`clear-button`}>
              <img src={closeSVG} alt="Mer" />
            </button>
          )}
        </div>
      </div>
      {search && search.length >= MIN_CHAR_BEFORE_SEARCH ? (
        <div className="found-items">
          <ul>
            <li className="search-result">Sökresultat</li>
            {found && found.length > 0 ? (
              found
                .slice(0, showAll ? found.length : SHOW_MAX_DEFAULT)
                .map((row) => (
                  <li key={row.key}>
                    <NavigationPoint
                      searchString={search}
                      paddingLeft
                      onClick={() => {
                        selectOption(row);
                      }}
                      title={row.title}
                      subtitle={row.area[0]}
                      cube={row.cube}
                    />
                  </li>
                ))
            ) : (
              <>
                <li className="message">
                  {search.length > 1 && (
                    <p>
                      Inget sökresultat för <strong>{search}</strong> hittades
                    </p>
                  )}
                </li>
              </>
            )}
            {found && found.length > SHOW_MAX_DEFAULT && !showAll && (
              <li className="show-all-button-wrapper">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className={`bottom-button`}
                >
                  <img src={nerSVG} alt="Mer" /> Visa alla sökresultat (
                  {found.length})
                </button>
              </li>
            )}
          </ul>
        </div>
      ) : (
        SearchDefault
      )}
    </div>
  );
};
