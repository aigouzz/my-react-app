import { lightTheme, darkTheme } from "../styles/variable"
import cssVars from 'css-vars-ponyfill'

export const initTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme ? 'light' : 'dark');
    cssVars({
        watch: true,
        variables: theme ? lightTheme : darkTheme,
        onlyLegacy: false
    });
}
