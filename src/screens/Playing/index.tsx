import { RouteProp, useRoute } from "@react-navigation/core";
import { useTheme } from "@react-navigation/native";
import React, { useCallback, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../components/Header";
import Icons from "../../components/Icons";
import Layout from "../../components/Layout";
import Text, { Size } from "../../components/Text";
import { themes } from "../../config/Themed";
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
      <View style={{ flex:1,}}>
      <View 
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginTop: 60,
        }}
      >
          <Text></Text>
          </View>
      </View>
    </Layout>
  );
};

export default Playing;

const styles = StyleSheet.create({});
