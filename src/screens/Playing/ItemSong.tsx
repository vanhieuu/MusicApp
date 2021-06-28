import React, { useMemo } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
} from "react-native";
import  { Size } from "../../components/Text";
import Colors from "../../config/Colors";

import { ISong } from "../../data/likeSong";
const { width } = Dimensions.get("window");
const widthImg = width - 120;
interface Props extends ISong {
  scrollX: Animated.Value;
  index: number;
}
const ItemSong = ({ source, name, author, scrollX, index }: Props) => {
  const inputRange = useMemo(
    () => [(index - 1) * widthImg, index * widthImg, (index + 1) * widthImg],
    [index]
  );
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.75, 1, 0.75],
  });
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
  });

  return (
    <View style={{ width: widthImg }}>
      <Animated.Image
        source={{ uri: source }}
        style={{
          width: widthImg,
          height: widthImg,
          transform: [{ scale: scale }],
          opacity,
        }}
      />
      <Animated.Text
        style={{
          transform: [{ scale: scale }],
          alignSelf: "center",
          fontSize: Size["h2"].value,
          marginTop: 16,
          marginBottom: 4,
          color:Colors.color_basic_1
        }}
      >
        {name}
      </Animated.Text>
      <Animated.Text
        style={{
          transform: [{ scale: scale }],
          alignSelf: "center",
          fontSize: Size["h5"].value,
          marginTop: 16,
          marginBottom: 4,
          color:Colors.color_basic_1
        }}
      >
        {author}
      </Animated.Text>
    </View>
  );
};

export default ItemSong;


