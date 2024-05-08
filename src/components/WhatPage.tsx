import { forwardRef } from "react";
import ProductivityImg from "../images/productivity.svg";

const WhatPage = forwardRef<HTMLDivElement>((_props, ref) => {
    return <section id="what-page" className="explanatory-section" ref={ref}>
        <div className="flex flex-col justify-center gap-8 explanatory-item">
            <h3>What is the Pomodoro Technique?</h3>
            <p>The Pomodoro Technique is a time management method that involves breaking down work into 25-minute intervals, called "pomodoros," separated by short breaks. The technique was developed by Francesco Cirillo in the late 1980s and is designed to improve focus and productivity.</p>
            <p>The Pomodoro Technique helps increase focus, reduce procrastination, and improve time management by breaking work into manageable intervals. It also encourages taking regular breaks to recharge. The technique can be applied to a variety of tasks, from coding and writing to cleaning and studying</p>
        </div>
        <img src={ProductivityImg} className="explanatory-item"/>
    </section>
});
export default WhatPage;