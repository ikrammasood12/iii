import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddProductScreen from './screens/AddProduct';
import List from './screens/List';
import WishlistScreen from './screens/List';


export default function App() {
  return (
    <View style={styles.container} >
      <WishlistScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
