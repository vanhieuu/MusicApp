import React, { useCallback, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import SliceSong from "./SliceSong";
import ControlShuffle from "./ControlShuffle";
import Time from "./Time";
import ControlPlay from "./ControlPlay";
import { Audio, AVPlaybackStatus } from "expo-av";
import { Sound } from "expo-av/build/Audio";
const { width } = Dimensions.get("window");

export type TStatusSound = "playing" | "pause" | "loading";

const Playing = () => {
  const listenPositionsMillid = React.useRef<NodeJS.Timeout>();
  const soundRef = React.useRef<Sound>();
  const [statusSound, setStatusSound] = useState<TStatusSound>("loading");
  const [avPlaybackStatus, setAVPlaybackStatus] = useState<AVPlaybackStatus>();
  const initAndPlaySound = useCallback(async () => {
    setStatusSound("loading");
    const { sound: _sound } = await Audio.Sound.createAsync({
      uri: "https://drive.google.com/uc?export=download&id=1gIaUZ4WT45SAbxvlsMYAlaaGLflLa34Y",
    });
    soundRef.current = _sound;
    await _sound.playAsync();
    setStatusSound("playing");
  }, []);

  const playSound = React.useCallback(async () => {
    await soundRef.current?.playAsync();

    setStatusSound("playing");
  }, []);

  const pauseSound = React.useCallback(async () => {
    await soundRef.current?.pauseAsync();

    setStatusSound("pause");
  }, []);

  const getAVPlaybackStatus = React.useCallback(
    async (_sound = soundRef.current) => {
      const statusAsync: AVPlaybackStatus | undefined =
        await _sound?.getStatusAsync();
      console.log("statusAsync", statusAsync);
      if (statusAsync?.isLoaded) {
        setAVPlaybackStatus(statusAsync);
      }
    },
    []
  );

  React.useCallback(
    (_sound = soundRef.current) => {
      if (statusSound === "playing") {
        listenPositionsMillid.current = setInterval(() => {
          getAVPlaybackStatus();
        }, 1000);
      } else {
        listenPositionsMillid.current &&
          clearInterval(listenPositionsMillid.current);
      }
    },
    [statusSound]
  );

  React.useEffect(() => {
    initAndPlaySound();
  }, []);
  React.useEffect(() => {
    return soundRef.current
      ? () => {
          console.log("Unloading Sound");
          soundRef.current?.unloadAsync();
        }
      : undefined;
  }, []);
  return (
    <Layout style={{ flex: 1 }}>
      <Header
        title="Playing Now"
        btnLeft={{ icon: "arrow-back", onPress: () => {} }}
      />
      <SliceSong />
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
