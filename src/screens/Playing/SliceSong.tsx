import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import { Animated, Dimensions, FlatList, View } from "react-native";
import { RootStackParamList } from "../../navigation/RootStack";
import ItemSong from "./ItemSong";
import { RouteProp, useRoute } from "@react-navigation/core";

const { width } = Dimensions.get("window");
const spacing = 60;
const widthImg = width - 120;
export interface IRefSliceSong {
  scrollToIndex: (index: number) => void;
}
interface Props {
  onChangeSound:(index: number) => void;
}
const SliceSong = forwardRef<IRefSliceSong, Props>((props, ref) => {
  const ScrollX = useRef(new Animated.Value(0)).current;
  const route = useRoute<RouteProp<RootStackParamList, "Playing">>();
  const refFlatlist = useRef<FlatList>(null);

  const scrollToIndex = useCallback((index: number) => {
    refFlatlist.current?.scrollToIndex({ index, viewPosition:0.5 });
  }, []); 

const onMomentumScrollEnd = useCallback(({nativeEvent})=>{
  let index = Math.round(nativeEvent.contentOffset.x / widthImg)
  props.onChangeSound(index)
},[])


  useImperativeHandle(ref, () => {
    return {
      scrollToIndex: scrollToIndex,
    };
  });
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
        bounces={false}
        decelerationRate="fast"
        snapToInterval={widthImg}
        style={{ flexGrow: 0 }}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
        ref={refFlatlist}
        // onMomentumScrollEnd={(e) =>{
        //   console.log('e',e.nativeEvent.contentOffset.x/widthImg)
        // }}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
    </View>
  );
});

export default SliceSong;
