import "react-native-gesture-handler";
import React, { useCallback, useContext, useMemo, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { ITheme, ThemeContext, themes, TMode } from "./src/config/Themed";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import { useFonts } from "expo-font";

export default function App() {
  const [mode, setMode] = useState<TMode>("dark");
  const [loaded] = useFonts({
    Regular: require("./src/asset/font/SF-Pro-Text-Regular.otf"),
    Bold: require("./src/asset/font/SF-Pro-Text-Bold.otf"),
    Heavy: require("./src/asset/font/SF-Pro-Text-Heavy.otf"),
    Light: require("./src/asset/font/SF-Pro-Text-Light.otf"),
    Medium: require("./src/asset/font/SF-Pro-Text-Medium.otf"),
    SemiBold: require("./src/asset/font/SF-Pro-Text-SemiBold.otf"),
    
  })
  const theme: ITheme = useMemo(
    () => (mode === "dark" ? themes.dark : themes.light),
    [mode]
  );
  const toogleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        toogleTheme,
        theme,
      }}
    >
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeContext.Provider>
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
