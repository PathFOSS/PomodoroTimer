import { forwardRef } from "react";
import { CheckIcon } from "../icons";
import ListImg from "../images/list.svg";

const HowPage = forwardRef<HTMLDivElement>((_props, ref) => {
    return <section id="how-page" className="explanatory-section sm:flex-col-reverse md:flex-col-reverse flex-col-reverse lg:max-2xl:flex-row 2xl:flex-row" ref={ref}>

        <img src={ListImg} className="explanatory-item"/>
        <div className="flex flex-col gap-8 explanatory-item">
            <h3>How to Perform the Technique?</h3>

            <div className="steps-item">
                <CheckIcon/>
                <p>Choose a task to work on</p>
            </div>
            <div className="steps-item">
                <CheckIcon/>
                <p>Set a timer for 25+ minutes and work on the task</p>
            </div>
            <div className="steps-item">
                <CheckIcon/>
                <p>When the timer goes off, take a 5-minute break</p>
            </div>

            <div className="steps-item">
                <CheckIcon/>
                <p>After 4 focus blocks, take a longer 15+ minute break</p>
            </div>
            <div className="steps-item">
                <CheckIcon/>
                <p>Repeat the process</p>
            </div>
        </div>
        
    </section>
});

export default HowPage;