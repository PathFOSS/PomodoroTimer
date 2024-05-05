import { forwardRef } from "react";
import Pomodoro from "./Pomodoro";
import Title from "./Title";

const MainPage = forwardRef((props, ref) => {
    return <section ref={ref} className="sm:max-2xl:py-8 2xl:py-8 py-2 flex flex-col justify-between h-screen align-center">
      <Title/>
      <Pomodoro/>
    </section>
})
export default MainPage;