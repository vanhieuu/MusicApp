import React from "react";
import { Text as DeafaultText, TextProps, TextStyle } from "react-native";
import { ITheme, useTheme } from "../config/Themed";
export type TSize = "h1" | "h2" | "h3" | "h4" | "h5";

interface Props extends TextProps {
  children?: string;
  style?: TextStyle;
  status?: keyof ITheme;
  size?: TSize;
}
export const Size = {
  h1: 24,
  h2: 18,
  h3: 16,
  h4: 12,
  h5: 10,
};

const Text = ({ status = "text", size = "h1", ...props }: Props) => {
  const { theme } = useTheme();
  return (
    <DeafaultText
      style={[{ color: theme[status], fontSize: Size[size] }, props.style]}
    >
      {props.children}
    </DeafaultText>
  );
};

export default Text;
