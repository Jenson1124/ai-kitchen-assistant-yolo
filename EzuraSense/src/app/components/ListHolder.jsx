import { StyleSheet, Text, View } from "react-native";
import ListDisplayer from "./ListDisplayer";
import { useFonts } from "expo-font";

export default function ListHolder({ bg_color, bg_color_text, list, title }) {
  const [fontsLoaded] = useFonts({
    name: require("../../../assets/fonts/PlaywriteUSModern-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <View style={[styles.title, { backgroundColor: bg_color_text }]}>
        <Text style={styles.title_txt}>{title}</Text>
      </View>
      <View style={styles.con}>
        {list.map((item, index) => {
          return (
            <ListDisplayer
              text={item}
              key={index}
              bg_color_text={bg_color_text}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    boxSizing: "border-box",
    borderRadius: 15,
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title: {
    paddingHorizontal: 15,
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: "center",
    paddingVertical: 10,
  },
  title_txt: {
    fontSize: 28,
    color: "rgb(0, 0, 0)",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    fontFamily: "name",
  },
  con: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
