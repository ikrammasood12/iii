import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WishlistScreen = () => {
  const [wishlist, setWishlist] = useState([
    { id: '1', title: 'Product 1', price: '1000', image: require('../assets/h.jpg') },
    { id: '2', title: 'Product 2', price: '2000', image: require('../assets/k.jpg') },
    { id: '3', title: 'Product 3', price: '3000', image: require('../assets/download.jpg') },
    { id: '4', title: 'Product 4', price: '3900', image: require('../assets/h.jpg') },
    { id: '5', title: 'Product 3', price: '3400', image: require('../assets/download.jpg') },
    { id: '6', title: 'Product 4', price: '3200', image: require('../assets/h.jpg') },
    // Add more items as needed
  ]);

  const removeItem = (itemId) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== itemId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>PKR {item.price}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>List of Products</Text>
      <FlatList
        data={wishlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        style={{ flex: 1, height: Math.ceil(wishlist.length / 2) * 200 }} // Set height dynamically
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    top: 40,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'left',
    padding:5,
    backgroundColor:"darkorange",
    borderRadius:10
  },
  list: {
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1, // Make the container square
    backgroundColor: 'white', // White background color
    borderRadius: 50, // Make it a circle
    overflow: 'hidden', // Clip the image to the circle
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Ensure the image covers the circle
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:"black"
  },
  price: {
    fontSize: 14,
    color: 'black',
    fontWeight:'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  removeButton: {
    backgroundColor: 'darkorange',
    padding: 6,
    borderRadius: 8,
    alignItems: 'center',
    
    
  },
  editButton: {
    backgroundColor: 'darkorange',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:12
  },
});

export default WishlistScreen;


