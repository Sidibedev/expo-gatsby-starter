import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { Link } from "gatsby";
import styles from "../../Styles";
export default () => {
  const [selectedImage, setSelectedImage] = React.useState("");
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === false) {
      setSelectedImage(pickerResult.uri);
    } else {
      alert("Upload a picture please");
    }
  };

  let rotate = async () => {
    const manipResult = await ImageManipulator.manipulateAsync(
      selectedImage,
      [{ flip: "" }, { flip: ImageManipulator.FlipType.Vertical }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setSelectedImage(manipResult.uri);
  };
  return selectedImage === "" ? (
    <View style={styles.container}>
      <Text style={styles.text}>Upload</Text>
      <Text style={styles.desc}>You can pick an image and rotate it </Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.desc}>Upload a picture</Text>
      </TouchableOpacity>
      <Link to="/" style={{ marginTop: 30 }}>
        Home
      </Link>
    </View>
  ) : (
    <View style={styles.container}>
      <Image source={{ uri: selectedImage }} style={styles.image} />
      <TouchableOpacity onPress={rotate} style={styles.button}>
        <Text style={styles.desc}>Rotate image</Text>
      </TouchableOpacity>
      <Link to="/" style={{ marginTop: 30 }}>
        Home
      </Link>
    </View>
  );
};
