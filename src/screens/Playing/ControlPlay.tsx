import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { TStatusSound } from ".";
import Icons from "../../components/Icons";

interface Props {
  playSound: () => void;
  pauseSound: () => void;
  statusSound: TStatusSound;
}

const ControlPlay = ({ playSound, pauseSound, statusSound }: Props) => {
  return (
    <View style={styles.controlPlay}>
      <TouchableOpacity>
        <Icons name="play-skip-back-outline" size={35} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginHorizontal: 16 }}
        onPress={() => {
          if (statusSound === "loading") return;
          if (statusSound === "playing") {
            pauseSound();
          } else {
            playSound();    
          }
        }}
      >
        {statusSound === "loading" ? (
          <ActivityIndicator />
        ) : statusSound === "playing" ? (
          <Icons name="pause" size={35} />
        ) : (
          <Icons name="play" size={35} />
        )}
      </TouchableOpacity>
      <TouchableOpacity>
        <Icons name="play-skip-forward-outline" size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default ControlPlay;

const styles = StyleSheet.create({
  controlPlay: {
    flex: 1.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
