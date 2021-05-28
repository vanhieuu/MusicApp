import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../../components/Text";

interface Props {
  durationMillis: number | undefined;
}
const convertMillis = (durationMillis: number): string => {
  let seconds = parseInt(`${durationMillis / 1000}`);
  let duration = seconds;
  let hours = duration / 3600;
  duration = duration % 3600;

  let min: number | string = parseInt(`${duration / 60}`);
  duration = duration % 60;

  let sec: number | string = parseInt(`${duration}`);

  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (parseInt(`${hours}`, 10) > 0) {
    return `${parseInt(`${hours}`, 10)}:${min}:${sec}`;
  }
  return `${min}:${sec}`;
};
const Time = ({ durationMillis }: Props) => {
  const duration = React.useMemo(() => {
    if (!durationMillis) return "--:--";
    return convertMillis(durationMillis);
  }, [durationMillis]);
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={styles.displayNumber}>
        <Text size={"h4"}>00:00</Text>
        <Text size={"h4"}>{duration}</Text>
      </View>
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({
  displayNumber: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 60,
  },
});
