import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import SliceSong, { IRefSliceSong} from "./SliceSong";
import ControlShuffle from "./ControlShuffle";
import Time from "./Time";
import ControlPlay from "./ControlPlay";
import { Audio, AVPlaybackStatus } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { RootStackParamList } from "../../navigation/RootStack";
const { width } = Dimensions.get("window");
import _ from "lodash";

export type TStatusSound = "playing" | "pause" | "loading";

const Playing = () => {
  const {goBack} = useNavigation();

  const indexSound = useRef<number>(0);
  const route = useRoute<RouteProp<RootStackParamList, "Playing">>();

  const soundRef = useRef<Sound>();
  const sliceSongRef = useRef<IRefSliceSong>(null);
  const [statusSound, setStatusSound] = useState<TStatusSound>("loading");
  const [avPlaybackStatus, setAVPlaybackStatus] =
     useState<AVPlaybackStatus>();
  const listenPositionsMilid = useRef<NodeJS.Timeout>();
  
  const initAndPlaySound = useCallback(
    async (index = indexSound.current) => {
      setStatusSound("loading");
      let currentSound = route.params.listSong[index];
      const { sound: _sound } = await Audio.Sound.createAsync({
        uri: currentSound.uri,
      });
      soundRef.current = _sound;
      await soundRef.current?.playAsync();

      setStatusSound("playing");
    },
    [indexSound.current, route.params.listSong]
  );

  const unloadAndInitPlay = useCallback(
    _.debounce(async () => {
      await soundRef.current?.unloadAsync();
      setStatusSound("loading");
      let currentSound = route.params.listSong[indexSound.current]
      await soundRef.current?.loadAsync({uri:currentSound.uri})
      await soundRef.current?.playAsync();
      setStatusSound("playing")
    }, 500),
    [initAndPlaySound]
  );

  const nextSound = useCallback(async () => {
    if (indexSound.current === route.params.listSong.length - 1) return;
    indexSound.current = indexSound.current + 1;
    sliceSongRef.current?.scrollToIndex(indexSound.current);
    unloadAndInitPlay();
  }, [unloadAndInitPlay]);

  const prevSound = useCallback(async () => {
    if (indexSound.current === 0) return;
    indexSound.current = indexSound.current - 1;
    sliceSongRef.current?.scrollToIndex(indexSound.current);
    unloadAndInitPlay();
  }, [initAndPlaySound, unloadAndInitPlay]);

const onChangeSound = useCallback(async(index:number) =>{
indexSound.current = index;
sliceSongRef.current?.scrollToIndex(indexSound.current);
unloadAndInitPlay()
},[initAndPlaySound,unloadAndInitPlay])

  const playSound = useCallback(async () => {
    await soundRef.current?.playAsync();
    setStatusSound("playing");
  }, []);

  const pauseSound = useCallback(async () => {
    await soundRef.current?.pauseAsync();
    setStatusSound("pause");
  }, []);

  const getAVPlaybackStatus = useCallback(
    async (_sound = soundRef.current) => {
      const statusAsync: AVPlaybackStatus | undefined =
        await _sound?.getStatusAsync();
      if (!statusAsync) return;
      setAVPlaybackStatus(statusAsync);
      // console.log("statusAsync", statusAsync?.positionMillis);
    },
    []
  );

  useEffect(() => {
    if (statusSound === "playing") {
      listenPositionsMilid.current = setInterval(() => {
        getAVPlaybackStatus();
      }, 1000);
    } else {
      listenPositionsMilid.current &&
        clearInterval(listenPositionsMilid.current);
    }
  }, [statusSound]);

  useEffect(() => {
    initAndPlaySound();
    return () => {
      listenPositionsMilid.current &&
        clearInterval(listenPositionsMilid.current);
    };
  }, []);
  useEffect(() => {
    return () => {
          soundRef.current?.unloadAsync();
        }
  }, []);
  return (
    <Layout style={{ flex: 1 }}>
      <Header
        title="Playing Now"
        btnLeft={{ icon: "arrow-back", onPress: () => {
          goBack();
        }, 
      }}
      />
      <SliceSong ref={sliceSongRef} onChangeSound={onChangeSound} />
      <ControlShuffle />
      <Time
        durationMillis={
          avPlaybackStatus?.isLoaded ? avPlaybackStatus.durationMillis : 0
        }
        positionMillis={
          avPlaybackStatus?.isLoaded ? avPlaybackStatus.positionMillis : 0
        }
      />
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="ffffff"
        maximumTrackTintColor="000000"
      />
      <ControlPlay
        pauseSound={pauseSound}
        playSound={playSound}
        statusSound={statusSound}
        nextSound={nextSound}
        prevSound={prevSound}
      />
    </Layout>
  );
};

export default Playing;

const styles = StyleSheet.create({
  slider: {
    width: width - 32,
    height: 40,
    alignSelf: "center",
  },
});
