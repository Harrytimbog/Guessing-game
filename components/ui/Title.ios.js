import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0, works perfectly
    padding: 12,
    maxWidth: "80%", // Referes to the container that hold this element
    width: 300,
  },
});
