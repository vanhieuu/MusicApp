import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import likedSongs, { ISong } from "../../data/likeSong";
import ItemSong from "./ItemSong";
import ListHeader from "./ListHeader";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import { RootStackParamList } from "../../navigation/RootStack";

const Like = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [data, setData] = useState(likedSongs);
  const [isRefresh, setIsRefresh] = useState(false);
  const goPlaying = useCallback(() => {
    navigate("Playing", {
      listSong: data,
    });
  }, [data]);
  const onRefresh = useCallback(() => {
    setIsRefresh(true);
    setTimeout(() => {
      setData(likedSongs);
      setIsRefresh(false);
    }, 1500);
  }, []);
  const onEndReached = useCallback(() => {
    setData((prev: ISong[]) => prev.concat(likedSongs));
  }, []);
  const renderItem = React.useCallback(
    ({ item }: { item: ISong }) => {
      return (
        <ItemSong
          name={item.name}
          author={item.author}
          uri={item.uri}
          id={item.id}
          source={item.source}
          onPress={goPlaying}
        />
      );
    },
    [goPlaying]
  );
  return (
    <Layout style={{ flex: 1, justifyContent: "center" }}>
      <Header
        title=""
        btnLeft={{ icon: "arrow-back", onPress: () => {} }}
        btnRight={{ icon: "options-outline", onPress: () => {} }}
      />
      <FlatList
        data={likedSongs}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        ListHeaderComponent={ListHeader}
        refreshing={isRefresh}
        onRefresh={onRefresh}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
      />
    </Layout>
  );
};

export default Like;

const styles = StyleSheet.create({});
