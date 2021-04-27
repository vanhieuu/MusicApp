import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Text from "../../components/Text";
import ItemList from "./ItemList";
const data = [
  {
    id: "1",
    title: "Monsters Go Bump",
    name: "ERIKA RECINOS",
    source: require("../../asset/image/img1.png"),
  },
  {
    id: "2",
    title: "Moment Apart",
    name: "ODESZA",
    source: require("../../asset/image/img6.png"),
  },
  {
    id: "3",
    title: "Monsters Go Bump",
    name: "ERIKA RECINOS",
    source: require("../../asset/image/img1.png"),
  },
  {
    id: "4",
    title: "Moment Apart",
    name: "ODESZA",
    source: require("../../asset/image/img6.png"),
  },
];
interface Props{
    title: string;
}
const RawList = ({title}:Props) => {
  return (
    <View style={{ marginTop: 24 }}>
      <Text style={{ paddingLeft: 16, marginBottom: 20 }}>
        {title}
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <ItemList
              key={index}
              title={item.title}
              source={item.source}
              name={item.name}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RawList;

const styles = StyleSheet.create({});
