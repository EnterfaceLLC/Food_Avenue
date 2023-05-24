//* RN IMPORTS//
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

//* STYLE, ICON IMPORTS//
import { AndroidView, styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';

//* COMPONENT IMPORT//
import CartList from '../../component/Carts/CartList';

//* DATA IMPORT//
import food from '../../../assets/data/food.json';

//* CART SCREEN CODE/
const CartScreen = () => {
  return (
    <View style={[AndroidView, styles.page]}>
      <View style={styles.head}>
        <FontAwesome name="opencart" size={30} color="white" />
        <Text style={styles.title}>Shopping Cart</Text>
      </View>

      <FlatList
        data={food}
        renderItem={({ item }) => <CartList product={item} />}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTxt}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
