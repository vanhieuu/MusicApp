import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../config/Themed";
interface Props {
  name: any;
  size: number;
}

const Icons = ({ name, size = 24 }: Props) => {
  const { theme } = useTheme();

  return <Ionicons name={name} size={size} />;
};

export default Icons;

const styles = StyleSheet.create({});
