import React from "react";
import { Text, View, Image } from "react-native";
import { Link } from "gatsby";
import styles from "../../Styles";
export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>Page not found</Text>
    <Text style={styles.desc}>It seems like your are lost </Text>
    <Image
      style={{ width: 60, height: 60 }}
      source={require("../../static/assets/404.png")}
    />
    <Link to="/" style={{ textDecoration: "none" }}>
      <View style={styles.button}>
        <Text style={styles.desc}> Go back to home</Text>
      </View>
    </Link>
  </View>
);
