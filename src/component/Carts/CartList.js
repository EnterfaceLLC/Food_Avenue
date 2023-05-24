//* RN IMPORTS//
import { View, Text } from 'react-native';
import React from 'react';

//* STYLE IMPORT//
import { AndroidView, styles } from './styles';


//* CART LIST COMPONENT//
const CartList = ({ product }) => {
  return (
    <View style={styles.cardContainer}>
      <Text>Qty: 2</Text>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};

export default CartList;
