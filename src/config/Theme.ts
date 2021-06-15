import React from "react";
import { ColorValue } from "react-native";
import Colors from "./Colors";
export type TMode = "dark" | "light";
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
    mode:TMode;
}
export const themes = {
  light: {
    background: Colors.secondary,
    text: Colors.color_basic_2,
    singer: Colors.color_basic_4,
    tab_background: Colors.secondary,
    icon_color:Colors.color_basic_1
  },
  dark: {
    background: Colors.primary,
    text: Colors.color_basic_1,
    singer: Colors.color_basic_1,
    tab_background: Colors.primary,
    icon_color: Colors.color_basic_1,
  },
};

export const ThemeContext = React.createContext<IThemeContext>({
  theme: themes.dark,
  toogleTheme: () => {},
  mode:'light'
});
export const useTheme = ():IThemeContext => {
  const { toogleTheme, theme,mode } = React.useContext(ThemeContext);
  return {
    toogleTheme,
    theme,
    mode
  };
};
