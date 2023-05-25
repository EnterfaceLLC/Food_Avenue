//* RN IMPORTS//
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';

//* AWS IMPORT//
import { Auth, DataStore } from 'aws-amplify';
import { Product, CartProduct } from '../../models';

//* STYLE, ICON IMPORTS//
import { AndroidView, styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';

//* COMPONENT IMPORT//
import CartList from '../../component/Carts/CartList';

//* DATA IMPORT//
// import food from '../../../assets/data/food.json';

//* CART SCREEN CODE/
const CartScreen = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      DataStore.query(CartProduct).then(setCartProducts);
    };
    fetchCartProducts();
  }, []);

  useEffect(() => {
    if (cartProducts.filter(cp => !cp.product).length === 0) {
      return;
    }

    const fetchProducts = async () => {
      const products = await Promise.all(
        cartProducts.map(cartProduct => DataStore.query(Product, cartProduct.cartProductProductId))
      );

      setCartProducts(currentCartProducts => currentCartProducts.map(cartProduct => ({
        ...cartProduct,
        product: products.find(p => p.id === cartProduct.cartProductProductId)
      })));
    };

    fetchProducts();
  }, [cartProducts]);

  const subTotal = cartProducts.reduce(
    (sum, product) =>
      sum + (product?.product?.price || 0) * product.quantity,
    0,
  );

  const taxes = subTotal * 0.0915;

  const totalPrice = subTotal + taxes;

  if (cartProducts.filter(cp => !cp.product).length !== 0) {
    return <ActivityIndicator />
  }

  // console.log('My Cart Products', cartProducts);

  return (
    <View style={[AndroidView, styles.page]}>
      <View style={styles.head}>
        <FontAwesome name="opencart" size={30} color="white" />
        <Text style={styles.title}>Shopping Cart</Text>
      </View>

      <FlatList
        data={cartProducts}
        renderItem={({ item }) => <CartList cartItem={item} />}
      />

      <View style={styles.summaryCont}>
        <View style>
          <Text style={styles.label}>Sub Total:</Text>
          <Text style={styles.label}>Tax:</Text>
          <Text style={styles.label}>Total:</Text>
        </View>
        <View>
          <Text style={styles.price}>${subTotal.toFixed(2)}</Text>
          <Text style={styles.price}>${taxes.toFixed(2)}</Text>
          <Text style={styles.price}>${totalPrice.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTxt}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
