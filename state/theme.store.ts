import create, {State} from "zustand";

interface Theme {
  primary: string;
  secondary: string;
  backdrop: string;
  accent: string;
}


interface ThemeState extends State {
  appTheme: Theme;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeState>((set) => {
  return {
    appTheme: {},
    
  }
})
