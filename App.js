import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddProductScreen from './screens/AddProduct';
import List from './screens/List';
import WishlistScreen from './screens/List';
import ToolsScreen from './screens/ToolsScreen';
import SellerScreen from './screens/SellerScreen';
import SS from './screens/SS';


export default function App() {
  return (
    <View style={styles.container} >
      <ToolsScreen/>
      {/* <AddProductScreen/> */}
      {/* <List/> */}
      {/* <SS/> */}
      {/* <SellerScreen/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
