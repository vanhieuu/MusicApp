import "react-native-gesture-handler";
import React, { useCallback, useContext, useMemo, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { ITheme, ThemeContext, themes, TMode } from "./src/config/Themed";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
export default function App() {
  const [mode, setMode] = useState<TMode>("dark");
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
