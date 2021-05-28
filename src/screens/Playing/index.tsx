import { RouteProp, useRoute } from "@react-navigation/core";
import React, { useCallback, useRef } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import Slider from "@react-native-community/slider";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../components/Header";
import Icons from "../../components/Icons";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import { RootStackParamList } from "../../navigation/RootStack";
import ItemSong from "./ItemSong";
const { width } = Dimensions.get("window");
const spacing = 60;
const widthImg = width - 120;
const Playing = () => {
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
    <Layout style={{ flex: 1 }}>
      <Header
        title="Playing Now"
        btnLeft={{ icon: "arrow-back", onPress: () => {} }}
      />
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginTop: 20,
        }}
      >
        <TouchableOpacity>
          <Icons name="volume-high-outline" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginRight: 12 }}>
            <Icons name="repeat" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons name="shuffle" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={styles.displayNumber}>
          <Text size={"h4"}>00:00</Text>
          <Text size={"h4"}>04:00</Text>
        </View>
      </View>
      <Slider
        style={{ width: width - 32, height: 40, alignSelf: "center" }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="fffff"
        maximumTrackTintColor="00000"
      />
      <View style={styles.controlPlay}>
        <TouchableOpacity>
          <Icons name="play-skip-back-outline" size={35} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 16 }}>
          <Icons name="pause" size={35} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons name="play-skip-forward-outline" size={35} />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Playing;

const styles = StyleSheet.create({
  controlPlay: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  displayNumber: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 60,
  },
});
