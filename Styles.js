import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    fontSize: 20,
    marginTop: 10,
    color: "gray",
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: "#eeeeee",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default styles;
