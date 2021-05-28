import React, { useCallback, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../navigation/RootStack";
import ItemSong from "./ItemSong";
import { RouteProp, useRoute } from "@react-navigation/core";
const { width } = Dimensions.get("window");
const spacing = 60;
const widthImg = width - 120;
const SliceSong = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Playing">>();
  const ScrollX = useRef(new Animated.Value(0)).current;
  const renderItem = useCallback(({ item, index }) => {
    return (
      <ItemSong
        name={item.name}
        author={item.author}
        uri={item.id}
        id={item.id}
        source={item.source}
        scrollX={ScrollX}
        index={index}
      />
    );
  }, []);
  return (
    <View>
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={route.params.listSong}
        pagingEnabled
        decelerationRate="fast"
        style={{ flexGrow: 0 }}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        snapToInterval={widthImg}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: ScrollX,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          paddingHorizontal: spacing,
        }}
      />
    </View>
  );
};

export default SliceSong;

const styles = StyleSheet.create({});
