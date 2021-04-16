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

function selectPropertyOnTheme(
  theme: themeType,
  darkProperty: any,
  ligthProperty: any
) {
  return theme === DARK ? darkProperty : ligthProperty;
}

function fetchTheme() {
  return (localStorage.getItem("flists-theme") as themeType) ?? DARK;
}

export const getTheme = () => {
  const themeConstant = fetchTheme();
  const theme = {
    bg0dp: selectPropertyOnTheme(themeConstant, "29, 34, 33", "248, 252, 252"),
    bg1dp: selectPropertyOnTheme(themeConstant, "40, 45, 44", "236, 239, 239"),
    bg2dp: selectPropertyOnTheme(themeConstant, "45, 49, 49", "231, 234, 234"),
    bg4dp: selectPropertyOnTheme(themeConstant, "49, 54, 53", "226, 229, 229"),
    bg6dp: selectPropertyOnTheme(themeConstant, "54, 58, 57", "221, 224, 224"),
    bg12dp: selectPropertyOnTheme(themeConstant, "61, 65, 64", "213, 217, 217"),
    bg24dp: selectPropertyOnTheme(themeConstant, "65, 69, 69", "208, 212, 212"),
    onBg: selectPropertyOnTheme(themeConstant, "255, 255, 255", "0, 0, 0"),
    primary: selectPropertyOnTheme(themeConstant, "154, 214, 207", "132, 184, 178"),
    primaryLight: "173, 245, 245",
    primaryDark: "79, 154, 148",
    onPrimary: "0, 0, 0",
    shadow: selectPropertyOnTheme(themeConstant, "20, 20, 20", "190, 190, 190"),
    success: selectPropertyOnTheme(themeConstant, "94, 209, 51", ""),
    surface: selectPropertyOnTheme(themeConstant, "248, 252, 252", "29, 34, 33"),
    onSurface: selectPropertyOnTheme(themeConstant, "29, 34, 33", ""),
    error: selectPropertyOnTheme(themeConstant, "255, 97, 97", "239, 2, 2"),
  };

  return theme;
};

export const switchTheme = () => {
  const themeConstant = fetchTheme();
  const nextTheme = themeConstant === DARK ? LIGTH : DARK;
  localStorage.setItem("flists-theme", nextTheme);
  return getTheme();
};

export { theme };
