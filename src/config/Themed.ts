import React from "react";
import { ColorValue } from "react-native";
import Colors from "./Colors";
export type TMode = "light" | "dark";
export interface ITheme {
  background: ColorValue;
  text: ColorValue;
  singer: ColorValue;
  tab_background: ColorValue,
  tab_active: ColorValue,
  tab_inactive: ColorValue,
  icon_color: ColorValue;
}
export interface IThemeContext{
    theme:ITheme,
    toogleTheme:() => void;
}
export const themes = {
  light: {
    background: Colors.primary,
    text: Colors.color_basic_1,
    singer: Colors.color_basic_4,
    tab_background: Colors.color_basic_2,
    icon_color:Colors.secondary
  },
  dark: {
    background: Colors.secondary,
    text: Colors.color_basic_2,
    singer: Colors.color_basic_2,
    tab_background: Colors.color_basic_2,
    icon_color: Colors.primary,
  },
};

export const ThemeContext = React.createContext<IThemeContext>({
  theme: themes.dark,
  toogleTheme: () => {},
});
export const useTheme = () => {
  const { toogleTheme, theme } = React.useContext(ThemeContext);
  return {
    toogleTheme,
    theme,
  };
};
