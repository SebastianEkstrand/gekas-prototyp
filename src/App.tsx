import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchBox } from "./components/SearchBox";
import { IProductCategories } from "./data/testData";
import { NavigationPresenter } from "./components/NavigationPresenter";
import { useState } from "react";

function App() {
  const [start, setStart] = useState<IProductCategories | null>(null);
  const [end, setEnd] = useState<IProductCategories | null>(null);

  const makeNavDescription = (
    startPoint: IProductCategories,
    endPoint: IProductCategories
  ) => {
    setStart(startPoint);
    setEnd(endPoint);

    setTimeout(() => {
      const element = document.getElementById("way-finder");
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }, 800);
  };

  const resetNav = () => {
    const element = document.getElementById("top");
    element?.scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      setStart(null);
      setEnd(null);
    }, 800);
  };

  const setAsStartPoint = (newStart: IProductCategories) => {
    setStart(newStart);
    setEnd(null);
  };

  return (
    <>
      <Header />
      <main>
        <h1>Hitta i varuhuset</h1>
        <p>
          Vi hjälper dig att hitta lite lättare i varuhuset med vår
          vägbeskrivnings generator nedan.
        </p>

        <SearchBox start={start} end={end} callBack={makeNavDescription} />
        {start && end && (
          <NavigationPresenter
            reset={resetNav}
            start={start}
            end={end}
            setAsStartPoint={setAsStartPoint}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
