import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

const SellerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/3.png')} // Replace with actual image
          style={styles.sellerImage}
        />
      </View>
      <Text style={styles.text}>Welcome millions of shopzy users</Text>
      <Text style={styles.text1}>are waiting to buy product</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.firstButton,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={() => {
            // Handle press event
          }}
        >
          <Text style={styles.buttonText}>Register with number</Text>
        </Pressable>
        <View style={styles.buttonSpacing} />
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.firstButton,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={() => {
            // Handle press event
          }}
        >
          <Text style={styles.buttonText}>Login with password</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  imageContainer: {
    height: 450,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sellerImage: {
    width: 150,
    height: 320,
    borderRadius: 75,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: -120,
  },
  text1: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    top:80,
    backgroundColor: 'darkorange',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    minWidth: 200, // Minimum width to prevent button from shrinking
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonPressed: {
    backgroundColor: 'darkorange',
  },
  buttonSpacing: {
    marginTop: 5,
  },
  firstButton: {
    marginBottom: 5,
  },
  secondButton: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

export default SellerScreen;


