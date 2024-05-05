import { useState } from "react";
import { MoonIcon, SettingsIcon, SunIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { activateDarkMode } from "../redux/slices/DarkModeSlice";
import Settings from "./Settings";
import { setSettings } from "../redux/slices/SettingsSlice";

const Title = () => {

    const [darkMode, setDarkMode] = useState(useSelector((state) => state.darkMode.value));
    const isSettings = useSelector((state) => state.settings.value);
    const dispatch = useDispatch();

    const handleThemeChange = () => {
        dispatch(activateDarkMode(!darkMode));
        setDarkMode(!darkMode);
    }

    return <nav className="flex justify-between">
        <div>
            <h1>Pomodoro</h1>
            <span>by PathFOSS</span>
        </div>
        <div className="flex sm:max-xl:gap-4 rounded-xl dark:bg-slate-700 bg-slate-100 sm:max-2xl:px-4 2xl:px-4 px-1">
            <button className="brand-btn" onClick={() => dispatch(setSettings(true))}><SettingsIcon/></button>
            <button className="brand-btn" onClick={() => handleThemeChange()}>{darkMode ? <SunIcon/> : <MoonIcon/>}</button>
        </div>
        {isSettings ? <Settings/> : null}
    </nav>
}
export default Title;