import React from "react";
import { Text, View } from "react-native";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import styles from "../../Styles";
export default () => (
  <View style={styles.container}>
    <Helmet>
      <title>Expo-Gatsby-Starter</title>
      <meta name="description" content="This is a expo-gatsby-starter app" />
    </Helmet>
    <Text style={styles.text}>About</Text>
    <Text style={styles.desc}>This is a Expo - Gatsby starter </Text>

    <Link to="/" style={{ textDecoration: "none" }}>
      <View style={styles.button}>
        <Text style={styles.desc}> Go back to home</Text>
      </View>
    </Link>
  </View>
);
