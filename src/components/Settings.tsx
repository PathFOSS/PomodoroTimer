import { CrossIcon, MinusIcon, PlusIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { setTimes } from "../redux/slices/TimeSlice";
import { setSettings } from "../redux/slices/SettingsSlice";
import { RootState } from "../redux/Store";

const Settings = () => {

    const times: number[] = useSelector((state: RootState) => state.times.value);
    const dispatch = useDispatch();

    const handleClick = (index: number, num: number) => {
        
        let outputArray: number[] = [];
        
        for (var i = 0; i <= 2; i++) {
            let newVal: number = times[i];

            if (index === i && newVal + num > 0) {
                outputArray.push(newVal + num);
                continue;
            }
            outputArray.push(newVal);
        }

        dispatch(setTimes(outputArray));
    }

    return <section id="settings">
        <div className="grid grid-cols-3 gap-4 dark:bg-slate-950 bg-slate-200 rounded-xl sm:max-2xl:p-8 2xl:p-8 p-4 max-w-96 shadow-2xl">
            <h3 className="col-span-2">Set Intervals</h3>
            <div className="flex justify-end">
                <a onClick={() => dispatch(setSettings(false))}><CrossIcon/></a>
            </div>
            <div className="settings-input-container">
                <h4>Focus</h4>
                <a className="math-btn" onClick={() => handleClick(0, -1)}><MinusIcon/></a>
                <p>{times[0]}</p>
                <a className="math-btn" onClick={() => handleClick(0, 1)}><PlusIcon/></a>
            </div>

            <div className="settings-input-container">
                <h4>Short Break</h4>
                <a className="math-btn" onClick={() => handleClick(1, -1)}><MinusIcon/></a>
                <p>{times[1]}</p>
                <a className="math-btn" onClick={() => handleClick(1, 1)}><PlusIcon/></a>
            </div>

            <div className="settings-input-container">
                <h4>Long Break</h4>
                <a className="math-btn" onClick={() => handleClick(2, -1)}><MinusIcon/></a>
                <p>{times[2]}</p>
                <a className="math-btn" onClick={() => handleClick(2, 1)}><PlusIcon/></a>
            </div>
            
        </div>
    </section>
}
export default Settings;