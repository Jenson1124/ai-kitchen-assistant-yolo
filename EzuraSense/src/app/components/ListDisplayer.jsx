import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function ListDisplayer({ text, bg_color_text }) {
  const [fontsLoaded] = useFonts({
    Heading: require("../../../assets/fonts/PlaywriteUSModern-Regular.ttf"),
  });
  if (!fontsLoaded) return null;

  return (
    <View style={[styles.container, { backgroundColor: bg_color_text }]}>
      <Text style={styles.txt}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    boxSizing: "border-box",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
  txt: {
    fontSize: 16,
    color: "black",
    textShadowColor: "rgba(0, 0, 0, 0.)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
    textAlign: "left",
    fontFamily: "Heading",
    boxSizing: "border-box",
  },
});
