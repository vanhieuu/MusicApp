import React, { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import likedSongs, { ISong } from "../../data/likeSong";
import ItemSong from "./ItemSong";
import ListHeader from "./ListHeader";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import { RootStackParamList } from "../../navigation/RootStack";
import urls from "../../config/API";

const Like = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>()
  const [data, setData] = useState<ISong[]>([]);
  const [loading,setLoading] = React.useState<boolean>(true);

  React.useEffect(()=>{
    fetch(urls.song)
    .then((response) => response.json())
    .then((songs) => {
      console.log("json",songs)
    setData(songs);
    setLoading(false)
    })
    .catch((error) => {
      console.error(error);
    });
  },[])



  const [isRefresh, setIsRefresh] = useState(false);
  const goPlaying = React.useCallback(() => {
    navigate("Playing", {
      listSong: data,
    });
  }, [data]);

  const onRefresh = useCallback(() => {
    setIsRefresh(true);
    fetch(urls.song)
    .then((response) => response.json())
    .then((songs) => {
      console.log("json",songs)
    setData(songs);
    setIsRefresh(false)
    })
    .catch((error) => {
      console.error(error);
    });
  },[])
  
  const onEndReached = useCallback(() => {
    setData((prev: ISong[]) => prev.concat(data));
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

  if(loading){
    return(
      <Layout style={{flex:1,justifyContent: "center",alignItems: "center"}}>
        <ActivityIndicator/>
      </Layout>
    )
  }
  return (
    <Layout style={{ flex: 1, justifyContent: "center" }}>
      <Header
        title=""
        btnLeft={{ icon: "arrow-back", onPress: () => {} }}
        btnRight={{ icon: "options-outline", onPress: () => {} }}
      />
      <FlatList
        data={data}
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
