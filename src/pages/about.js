import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "gatsby";
import styles from "../../Styles";
export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>About</Text>
    <Text style={styles.desc}>This is a Expo - Gatsby starter </Text>

    <Link to="/" style={{ textDecoration: "none" }}>
      <View style={styles.button}>
        <Text style={styles.desc}> Go back to home</Text>
      </View>
    </Link>
  </View>
);
