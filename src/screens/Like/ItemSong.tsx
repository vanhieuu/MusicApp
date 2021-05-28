import React from "react";
import { StyleSheet,  Dimensions, Image,TouchableOpacity } from "react-native";
import Text from "../../components/Text";
import { ISong } from "../../data/likeSong";

const { width } = Dimensions.get("window");
const widthItem = (width - 16) / 2;
const widthImg = (width - 48) / 2;
interface Props extends ISong {
    onPress: () => void;
}
const ItemSong = ({  name, author, source, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: source }} style={styles.img} borderRadius={6} />
      <Text size={"h3"} font="Medium" style={styles.text}>
        {name}
      </Text>
      <Text size={"h5"} status={"text"} style={{ alignSelf: "center" }}>
        {author}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemSong;

const styles = StyleSheet.create({
  container: 
{ 
    width: widthItem,
    paddingHorizontal: 8, 
    marginBottom: 16 
},
    text: 
{
     alignSelf: "center", 
    marginTop: 12, 
    marginBottom: 5 
},
  img: 
{ 
      width: widthImg, 
      height: widthImg 
},
});
