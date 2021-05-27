import React from "react";
import { Text as DeafaultText, TextProps, TextStyle } from "react-native";
import { ITheme, useTheme } from "../config/Themed";
export type TSize = "h1" | "h2" | "h3" | "h4" | "h5";
export type TFont =
  | "Regular"
  | "Bold"
  | "Heavy"
  | "Light"
  | "Medium"
  | "Semibold";
interface Props extends TextProps {
  children?: string;
  style?: TextStyle;
  status?: keyof ITheme;
  size?: TSize;
  font?: TFont;
}
export const Size = {
  h1: {
    value: 24,
    lineHeight: 28,
  },
  h2: {
    value: 18,
    lineHeight: 22,
  },
  h3: {
    value: 16,
    lineHeight: 20,
  },
  h4: {
    value: 12,
    lineHeight: 16,
  },
  h5: {
    value: 10,
    lineHeight: 12,
  },
};
export const BaseFont = "SF-Pro-Text";
export const Fonts = {
  Regular: `${BaseFont}-Regular`,
  Bold: `${BaseFont}-Bold`,
  Heavy: `${BaseFont}-Heavy`,
  Light: `${BaseFont}-Light`,
  Medium: `${BaseFont}-Medium`,
  SemiBold: `${BaseFont}-Semibold`,
};
const Text = ({
  status = "text",
  size = "h1",
  font = "Bold",
  ...props
}: Props) => {
  const { theme } = useTheme();
  return (
    <DeafaultText
      style={[
        {
          color: theme[status],
          fontSize: Size[size].value,
          fontFamily: font,
          lineHeight: Size[size].lineHeight,
        },
        props.style,
      ]}
    >
      {props.children}
    </DeafaultText>
  );
};

export default Text;
