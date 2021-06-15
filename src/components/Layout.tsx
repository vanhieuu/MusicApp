import React from "react";
import {
  PressableStateCallbackType,
  StyleSheet,
  Text,
  View as DefaultView,
  ViewProps,
  ViewStyle,
} from "react-native";
import { useTheme } from "../config/Theme";

interface Props extends ViewProps {
  children?:
    | React.ReactNode
    | ((state: PressableStateCallbackType) => React.ReactNode);
  style: ViewStyle;
}

const Layout = (props: Props) => {
  const { theme } = useTheme();
  return (
    <DefaultView style={[{ backgroundColor: theme.background }, props.style]}>
      {props.children}
    </DefaultView>
  );
};

export default Layout;


