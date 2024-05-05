import { ArrowDownIcon } from "./icons";
import { useSelector } from "react-redux";
import WhatPage from "./components/WhatPage";
import HowPage from "./components/HowPage";
import { useEffect, useRef, useState } from "react";
import MainPage from "./components/MainPage";
import useIsInViewport from "./utils/useIsInViewPort"

const  App = () => {

  const mainPage = useRef(null);
  const whatPage = useRef(null);
  const howPage = useRef(null);

  const isMainPageVisibile = useIsInViewport(mainPage);
  const isWhatPageVisibile = useIsInViewport(whatPage);
  const isHowPageVisibile = useIsInViewport(howPage);

  const darkMode = useSelector((state) => state.darkMode.value);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const pageList = ["app", "what-page", "how-page"];

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
    let index = 0;
    if (!flipped) {
      index = currentIndex + 1
    }
    document.getElementById(pageList[index]).scrollIntoView();
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