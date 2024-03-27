import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const AddProductScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('phone');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImages([...selectedImages, result.uri]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImages([...selectedImages, result.uri]);
    }
  };

  const handleAddProduct = () => {
    // Implement logic to add product
    console.log('Add Product');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Manage Products</Text>
      <Text style={styles.subHeading}>Add Product</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Product Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setProductName}
          value={productName}
          placeholder="Enter product name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Product Category:</Text>
        <View style={styles.input}>
          <View style={styles.pickerBorder}>
            <Picker
              selectedValue={selectedCategory}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedCategory(itemValue)}>
              <Picker.Item label="Phone" value="phone" />
              <Picker.Item label="Laptop" value="laptop" />
              <Picker.Item label="Headphones" value="headphones" />
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Product Price:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPrice}
          value={price}
          keyboardType="numeric"
          placeholder="Enter product price"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Discounted Price:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDiscountedPrice}
          value={discountedPrice}
          keyboardType="numeric"
          placeholder="Enter discounted price"
        />
      </View>
      <View style={styles.imageContainer}>
        <Text style={styles.label}>Product Photos:</Text>
        <View style={styles.imageOptions}>
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <View style={styles.buttonContent}>
              <MaterialIcons name="photo-library" size={24} color="black" />
              <Text style={styles.buttonText}>Upload Photo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <View style={styles.buttonContent}>
              <MaterialIcons name="camera-alt" size={24} color="black" />
              <Text style={styles.buttonText}>Take Photo</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.imageList}>
          {selectedImages.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.addProductButton} onPress={handleAddProduct}>
        <Text style={styles.addProductButtonText}>Add Product</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    top:15,
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'darkorange',
    borderRadius: 10,
   
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'darkorange',
    color: 'black',
    borderRadius: 10,
   
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  picker: {},
  imageContainer: {
    marginBottom: 20,
  },
  imageOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: 180,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 5,
  },
  imageList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 10,
  },
  pickerBorder: {
    top: -3,
  },
  addProductButton: {
    backgroundColor: 'darkorange',
    paddingVertical: 15,
    borderRadius: 10,
  
  },
  addProductButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddProductScreen;


