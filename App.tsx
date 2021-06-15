import "react-native-gesture-handler";
import React, { useCallback,useMemo, useState } from "react";
import {  StyleSheet, } from "react-native";
import { ITheme, ThemeContext, themes, TMode } from "./src/config/Theme";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import { useFonts } from "expo-font";
import "./src/trans/i18n"
import { ILocalization, TLocale,LocalizationContext } from "./src/config/Locallize";
import { TScope } from "./src/trans/vi";
import I18n, { TranslateOptions } from "i18n-js";
export default function App() {
  const [mode, setMode] = useState<TMode>("dark");
  const [locale,setLocale] = useState<TLocale>("vi");
  const localizationContext:ILocalization = useMemo(
    () =>({
      t:(scope:TScope,options?:TranslateOptions) =>
      I18n.t(scope,{locale,...options}),
      locale,
      setLocale
    }),[locale]
  )
  const [loaded] = useFonts({
    Regular: require("./src/asset/fonts/SF-Pro-Text-Regular.otf"),
    Bold: require("./src/asset/fonts/SF-Pro-Text-Bold.otf"),
    Heavy: require("./src/asset/fonts/SF-Pro-Text-Heavy.otf"),
    Light: require("./src/asset/fonts/SF-Pro-Text-Light.otf"),
    Medium: require("./src/asset/fonts/SF-Pro-Text-Medium.otf"),
    SemiBold: require("./src/asset/fonts/SF-Pro-Text-Semibold.otf"),
  })
  const theme: ITheme = useMemo(
    () => (mode === "dark" ? themes.dark : themes.light),
    [mode]
  );  
  const toogleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);
  if(!loaded) {
    return null;
  }

  return (
    <LocalizationContext.Provider value={localizationContext}>
       <ThemeContext.Provider
      value={{
        toogleTheme,
        theme,
        mode
      }}
    >
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeContext.Provider>
    </LocalizationContext.Provider>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
