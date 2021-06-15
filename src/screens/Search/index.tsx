import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import _ from "lodash";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import { ISong } from "../../data/likeSong";
import { RootStackParamList } from "../../navigation/RootStack";
import url from "../../config/API";


const Search = () => {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();
  const [data, setData] = React.useState<ISong[]>([]);
  const [key, setKeY] = React.useState<string>("");

  const getSongByKey = React.useCallback(
    _.debounce((text: string) => {
      fetch(url.songByKey(key))
        .then((response) => response.json())
        .then((songs) => {
          setData(songs);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
    [key]
  );

  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Tìm kiếm bài hát"
              value={key}
              onChangeText={(text: string) => {
                setKeY(text);
                getSongByKey(text);
              }}
              style={{flex:1}}
            />
            {!!key && (
              <TouchableOpacity style={{
                width:16,
                height:16,
                borderRadius:8,
                justifyContent:"center",
                alignItems: "center",
                marginRight:12}}>
                onPress ={() =>{
                  setKeY("")
                }}
              </TouchableOpacity>
            )}
          </View>
          <Pressable style={styles.btnCancel} onPress={goBack}>
            <Text size="h3">Huỷ</Text>
          </Pressable>
        </View>
        <ScrollView>
          {data.map((item: ISong, index) => {
            return (
              <View
                style={{
                  width: "100%",
                  height: 50,
                  marginVertical: 8,
                  flexDirection: "row",
                  paddingLeft:16
                }}
                key={index}
              >
                <Image
                  source={{ uri: item.source }}
                  style={{ width: 50, height: 50 }}
                  borderRadius={4}
                />
                <View style={{ 
                    paddingLeft:12,
                    justifyContent: "center"
                }}>
                    <Text size="h2">{item.name}</Text>
                    <Text size="h3">{item.author}</Text>
                
                </View>
                
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.color_basic_3,
  },
  containerInput: {
    flex: 1,
    height: 40,
    marginRight: 8,
    borderRadius: 4,
    backgroundColor: Colors.color_basic_1,
    justifyContent: "center",
    paddingLeft: 8,
  },
  btnCancel: {
    height: 100,
    justifyContent: "center",
    marginVertical: 16,
  },
});
