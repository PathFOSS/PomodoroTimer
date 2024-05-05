import { useEffect, useState } from "react";
import formatTime from "../utils/formatTime";
import { PauseIcon, StartIcon } from "../icons";
import { useSelector } from "react-redux";

const Pomodoro = () => {

    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [selected, setSelected] = useState(0); 
    const [seconds, setSeconds] = useState(0); 
    const [rounds, setRounds] = useState(0); 

    const [isStarted, setIsStarted] = useState(false); 
    const minuteMap = {
        0: useSelector((state) => state.times.value[0]),
        1: useSelector((state) => state.times.value[1]),
        2: useSelector((state) => state.times.value[2]),
    };
    const typeMap = {
        0: "Focus",
        1: "Short Break",
        2: "Long Break",
    };

    useEffect(() => {
        let interval = null;
        if (isStarted) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
                document.title = formatTime(timeLeft - seconds - 1) + " | " + typeMap[selected] + " | Pomodoro Timer With Privacy & Minimalism";
                if (seconds + 1 >= timeLeft) {
                    setIsStarted(false);
                    if (selected === 0) {
                        setRounds(rounds + 1);
                    }
                }
            }, 1000);
        } else if (!isStarted && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isStarted, seconds]);

    useEffect(() => {
            setTimeLeft(minuteMap[selected] * 60);
            setSeconds(0);
            setIsStarted(false);
            document.title = "Pomodoro Timer With Privacy & Minimalism";
    }, [selected]);

    return <div className="grid justify-center items-center h-full">
        <div id="timer">
            <button className={selected === 0 ? "selected-btn" : "inactive-btn"} onClick={() => setSelected(0)}>Focus</button>
            <button className={selected === 1 ? "selected-btn" : "inactive-btn"} onClick={() => setSelected(1)}>Short Break</button>
            <button className={selected === 2 ? "selected-btn" : "inactive-btn"} onClick={() => setSelected(2)}>Long Break</button>
            <h2 className="col-span-3">{formatTime(timeLeft - seconds)}</h2>
            <div className="col-span-3 flex justify-center">
                <button className="flex justify-center dark:bg-slate-400 bg-slate-100 border-2 border-slate-400 py-4 min-w-32" onClick={() => setIsStarted(!isStarted)}>{isStarted ? <PauseIcon/> : <StartIcon/>}</button>
            </div>
        </div>
    </div>
}
export default Pomodoro;