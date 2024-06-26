import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/DarkModeSlice";
import timesReducer from "./slices/TimeSlice";
import settingsReducer from "./slices/SettingsSlice";

export const Store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        times: timesReducer,
        settings: settingsReducer,
    }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;