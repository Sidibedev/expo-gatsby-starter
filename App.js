import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
export default function App() {
  const [selectedImage, setSelectedImage] = React.useState("");
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled == false) {
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
  return (
    <View style={styles.container}>
      {selectedImage == "" ? (
        <View>
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.button}
          >
            <Text style={{ color: "#eeb585" }}>Upload a picture</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Image source={{ uri: selectedImage }} style={styles.image} />
          <TouchableOpacity onPress={rotate} style={styles.button}>
            <Text style={{ color: "#eeb585" }}>Rotate image</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: "#cccccc",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});
