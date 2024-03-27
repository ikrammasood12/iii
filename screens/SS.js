import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

const SS = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
      </View>
      <TouchableOpacity style={styles.selectImageButton} onPress={pickImage}>
        <MaterialIcons name="camera-alt" size={24} color="black" style={styles.cameraIcon} />
        <Text style={styles.buttonText1}>Upload Image</Text>
      </TouchableOpacity>
      <View style={styles.container1}>
        <Text style={styles.sellerCenterText}>Seller Center</Text>
        <MaterialIcons name="notifications" size={40} color="black" style={styles.bellIcon} />
        <View style={styles.orangeBackground}>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>Please complete the todo list to</Text>
            <Text style={styles.text1}>start your journey</Text>

            <Pressable style={styles.pressable} onPress={() => console.log('Pressed!')}>
              <Text style={styles.buttonText}>Add Profile</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </Pressable>

            <Pressable style={styles.pressable} onPress={() => console.log('Pressed!')}>
              <Text style={styles.buttonText}>Add Address</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </Pressable>

            <Pressable style={styles.pressable} onPress={() => console.log('Pressed!')}>
              <Text style={styles.buttonText}>Verify ID</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </Pressable>

            <Pressable style={[styles.pressable, styles.lastPressable]} onPress={() => console.log('Pressed!')}>
              <Text style={styles.buttonText}>Add Product</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  imageContainer: {
    top: 100,
    width: 200,
    height: 200,
    borderRadius: 100, // Make the container round
    overflow: 'hidden', // Clip the image within the round container
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  selectImageButton: {
    top: -120,
    borderRadius: 200, // Make the button round
    backgroundColor: 'white',
    paddingVertical: 70,
    paddingHorizontal: 20,
    borderColor: 'black', // Set border color to black
    borderWidth: 3, // Set border width
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container1: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingToptop: -20,
  },
  sellerCenterText: {
    position: 'absolute',
    top: -370,
    left: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'darkorange',
  },
  bellIcon: {
    position: 'absolute',
    top: -370,
    right: 20,
    color: 'darkorange',
  },
  orangeBackground: {
    top: -100,
    backgroundColor: 'darkorange',
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  contentContainer: {
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    right: 65,
  },
  text1: {
    fontSize: 20,
    marginBottom: 20,
    right: 190,
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  lastPressable: {
    marginBottom: 0,
  },
  buttonText: {
    fontSize: 20,
    marginRight: 10,
  },
  cameraIcon: {
    marginRight: 5,
  },
  buttonText1: {
    fontSize: 15,
    marginRight: 10,
    
  },
});

export default SS;
