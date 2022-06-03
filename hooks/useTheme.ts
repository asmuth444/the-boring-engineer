import { useEffect, useState } from "react";
import LocalStorageKeys from "../enums/LocalStorageKeys";
import Themes from "../enums/Themes";
import useMediaQuery from "./useMediaQuery";
import useStorage from "./useStorage";

const useTheme = () => {
    const {getItem, setItem} = useStorage();
    const matches = useMediaQuery('(prefers-color-scheme: dark)');
    const [theme, setTheme] = useState<Themes>();

    const toggleTheme = () => {
        let newTheme: Themes;
        switch (theme) {
            case Themes.Light:
                newTheme = Themes.Dark;
                break;
            case Themes.Dark:
                newTheme = Themes.Auto;
                break;
            case Themes.Auto:
            default:
                newTheme = Themes.Light;
                break;
        }
        setItem(LocalStorageKeys.Theme, newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        const defaultTheme = getItem(LocalStorageKeys.Theme, Themes.Auto) as Themes;
        setTheme(defaultTheme);
    }, []);

    useEffect(() => {
        let isDarkMode: boolean;
        if (theme === Themes.Auto) {
            isDarkMode = matches;
        } else {
            isDarkMode = theme === Themes.Dark;
        }
        const doc = document.querySelector("html");
        if (isDarkMode) doc?.classList.add("dark");
        else doc?.classList.remove("dark");
    }, [theme, matches]);

    return { theme, toggleTheme };

}

export default useTheme;