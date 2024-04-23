import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const ToolsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.toolsText}>Tools</Text>
      </View>
      <View>
        <Text style={styles.basicFunctionText}>Basic Functions</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <Pressable style={styles.button}>
            <MaterialIcons name="build" size={30} color="darkorange" />
          </Pressable>
          <Text style={styles.iconText}>Manage</Text>
          <Text style={styles.iconText}>Products</Text>
        </View>
        <View style={styles.iconContainer}>
          <Pressable style={styles.button}>
            <MaterialIcons name="shopping-cart" size={30} color="darkorange" />
          </Pressable>
          <Text style={styles.iconText}>Products</Text>
        </View>
        <View style={styles.iconContainer}>
          <Pressable style={styles.button}>
            <MaterialIcons name="rate-review" size={30} color="darkorange" />
          </Pressable>
          <Text style={styles.iconText}>Manage</Text>
          <Text style={styles.iconText}>Reviews</Text>
        </View>
        <View style={styles.iconContainer}>
          <Pressable style={styles.button}>
            <MaterialIcons name="storefront" size={30} color="darkorange" />
          </Pressable>
          <Text style={styles.iconText}>Borrow</Text>
          <Text style={styles.iconText}>Products</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <Pressable style={styles.button}>
            <MaterialCommunityIcons name="map-marker" size={30} color="darkorange" />
          </Pressable>
          <Text style={styles.iconText}>Order</Text>
          <Text style={styles.iconText}>Tracking</Text>
        </View>
        <View style={styles.iconContainer}>
          <Pressable style={styles.button}>
            <MaterialIcons name="contacts" size={30} color="darkorange" />
          </Pressable>
          <Text style={styles.iconText}>Connection</Text>
          <Text style={styles.iconText}>Request</Text>
        </View>
        <View style={styles.iconContainer}>
          <Pressable style={styles.button}>
            <MaterialIcons name="monetization-on" size={30} color="darkorange" />
          </Pressable>
          <Text style={styles.iconText}>Negotiate</Text>
          <Text style={styles.iconText}>Price</Text>
        </View>
        <View style={styles.emptySpace} />
      </View>
      <View style={styles.promotionContainer}>
        <Text style={styles.promotionText}>Promotions</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <Pressable style={styles.button}>
            <MaterialIcons name="local-shipping" size={30} color="darkorange" />
          </Pressable>
          <Text style={styles.iconText}>Free</Text>
          <Text style={styles.iconText}>Shipping</Text>
        </View>
        <View style={styles.emptySpace} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top:20,
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 1,
  },
  toolsText: {
    fontSize: 30,
    left: 15,
    top: 10,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'darkorange',
  },
  basicFunctionText: {
    fontSize: 25,
    top: 20,
    left: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20, // Add margin between buttons
  },
  iconContainer: {
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#FFE4B5',
    alignItems: 'center',
    marginLeft:27,
    right:20,
    justifyContent: 'center',
  },
  iconText: {
    marginTop: 5,
    color: 'black',
    fontWeight:'900'
  },
  emptySpace: {
    width: 60,
    height: 60,
  },
  promotionContainer: {
    left:15,
    top:30
  },
  promotionText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default ToolsScreen;
