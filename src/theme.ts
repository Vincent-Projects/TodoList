import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "4px",
  colors: {
    main: "",
    secondary: "",
  },
};

const DARK = "DARK";
const LIGTH = "LIGTH";

type themeType = "DARK" | "LIGTH";

function selectPropertyOnTheme(theme: themeType, darkProperty: any, ligthProperty: any) {
  return theme === DARK ? darkProperty : ligthProperty;
}

function fetchTheme() {
  return localStorage.getItem("flists-theme") as themeType ?? DARK;
}

export const getTheme = () => {
  const themeConstant = fetchTheme();
  const theme = {
    bg0dp: selectPropertyOnTheme(themeConstant, "29, 34, 33", "248, 252, 252"),
    bg1dp: selectPropertyOnTheme(themeConstant, "40, 45, 44", "236, 239, 239")
  }

  return theme;
}

export const switchTheme = () => {
  const themeConstant = fetchTheme();
  const nextTheme = themeConstant === DARK ? LIGTH : DARK;
  localStorage.setItem("flists-theme", nextTheme);
  return getTheme();
}

export { theme };
