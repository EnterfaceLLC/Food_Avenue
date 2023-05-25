//* RN IMPORTS//
import { View, Text } from 'react-native';
import React from 'react';

//* STYLE IMPORT//
import { AndroidView, styles } from './styles';


//* CART LIST COMPONENT//
const CartList = ({ cartItem }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.qty}>{cartItem.quantity}</Text>
      <View style={styles.productInfo}>
        <Text>{cartItem.product.name}</Text>
        <Text>${cartItem.product.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default CartList;
