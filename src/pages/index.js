import React from "react";
import { Text, View } from "react-native";

import { Link } from "gatsby";
import styles from "../../Styles";
export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Expo-Gatsby starter</Text>
      <Text style={styles.desc}>This is a Expo - Gatsby starter </Text>

      <Link to="/upload" style={{ textDecoration: "none" }}>
        <View style={styles.button}>
          <Text style={styles.desc}> Go to upload page</Text>
        </View>
      </Link>

      <Link to="/about" style={{ textDecoration: "none" }}>
        <View style={styles.button}>
          <Text style={styles.desc}> Go to about page</Text>
        </View>
      </Link>
    </View>
  );
};
