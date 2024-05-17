import { useEffect, useState } from "react";
import formatTime from "../utils/formatTime";
import { PauseIcon, StartIcon } from "../icons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import FocusEndSound from "../audio/focus_end.mp3";
import BreakEndSound from "../audio/break_end.mp3";

const Pomodoro = () => {

    const [timeLeft, setTimeLeft] = useState<number>(25 * 60);
    const [selected, setSelected] = useState<number>(0); 
    const [seconds, setSeconds] = useState<number>(0); 
    const [rounds, setRounds] = useState<number>(0); 

    const [isStarted, setIsStarted] = useState<boolean>(false); 
    const timesArray: [number, number, number] = useSelector((state: RootState) => state.times.value)

    enum typeMap {"Focus", "Short Break", "Long Break"};

    useEffect(() => {
        let interval: number = 0;
        if (isStarted) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
                document.title = formatTime(timeLeft - seconds - 1) + " | " + typeMap[selected] + " | Pomodoro Timer With Privacy & Minimalism";
                if (seconds + 1 >= timeLeft) {
                    setIsStarted(false);
                    let newSelected: number = 1;

                    if (selected === 0) {
                        setRounds(rounds + 1);
                        if ((rounds + 1) % 4 === 0) {
                            newSelected++;
                        }
                        new Audio(FocusEndSound).play();
                    } else {
                        newSelected--;
                        new Audio(BreakEndSound).play();
                    }
                    setSelected(newSelected);
                    setIsStarted(true);
                }
            }, 1000);
        } else if (!isStarted && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isStarted, seconds]);

    useEffect(() => {
            setTimeLeft(timesArray[selected] * 60);
            setSeconds(0);
            document.title = "Pomodoro Timer With Privacy & Minimalism";
    }, [selected, timesArray]);

    return <div className="flex justify-center items-center h-full">
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