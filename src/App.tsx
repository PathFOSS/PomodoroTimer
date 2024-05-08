import { ArrowDownIcon } from "./icons";
import { useSelector } from "react-redux";
import WhatPage from "./components/WhatPage";
import HowPage from "./components/HowPage";
import { useEffect, useRef, useState } from "react";
import MainPage from "./components/MainPage";
import useIsInViewport from "./utils/useIsInViewPort";
import { RootState } from "./redux/Store";


const  App = () => {

  const mainPage = useRef<HTMLDivElement>(null);
  const whatPage = useRef<HTMLDivElement>(null);
  const howPage = useRef<HTMLDivElement>(null);

  const isMainPageVisibile = useIsInViewport(mainPage);
  const isWhatPageVisibile = useIsInViewport(whatPage);
  const isHowPageVisibile = useIsInViewport(howPage);

  const darkMode: boolean = useSelector((state: RootState) => state.darkMode.value);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [flipped, setFlipped] = useState<boolean>(false);
  const pageList: [string, string, string] = ["app", "what-page", "how-page"];

  if (darkMode) {
    window.document.documentElement.classList.add("dark");
  } else {
    window.document.documentElement.classList.remove("dark");
  }

  useEffect(() => {
    if (isMainPageVisibile) {
      setFlipped(false);
      setCurrentIndex(0);
      return;
    } else if (isWhatPageVisibile) {
      setFlipped(false);
      setCurrentIndex(1);
      return;
    } else if (isHowPageVisibile) {
      if (!isWhatPageVisibile) {
        setFlipped(true);
      }
      setCurrentIndex(2);
      return;
    }
  }, [isMainPageVisibile, isWhatPageVisibile, isHowPageVisibile])

  const handleClick = () => {
    let index: number = 0;
    if (!flipped) {
      index = currentIndex + 1
    }
    document.getElementById(pageList[index])!.scrollIntoView();
  };

  return <div id="app" className="relative transition">
    <MainPage ref={mainPage}/>
    <div className="py-8"></div>
    <WhatPage ref={whatPage}/>
    <div className="py-8"></div>
    <HowPage ref={howPage}/>
    <div className="fixed sm:max-2xl:bottom-8 2xl:bottom-8 bottom-2 right-0 2xl:mx-48 xl:mx-32 lg:mx-16 md:mx-12 sm:mx-4 mx-2 w-auto">
        <button id="scroll-btn" className={flipped ? "flipped" : ""} onClick={() => handleClick()}><ArrowDownIcon/></button>
    </div>
  </div>
}
export default App;