import Typography from "typography";
import funstonTheme from "typography-theme-funston";

funstonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'body': {
    'background': '#272727',
    'color': '#747474'
  },
  'h1,h2,h3,h4,h5,h6': {
    'color': '#14A76C'
  },
  'blockquote': {
    'color': '#EEE2DC',
    'border-left': '0.2625rem solid #FFE400'
  },
  'a': {
    'color': '#14A76C'
  },
  'small': {
    'color': '#FFE400'
  },
  'hr': {
    'background': '#747474'
  },
});

const typography = new Typography(funstonTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm;
export const scale = typography.scale;
