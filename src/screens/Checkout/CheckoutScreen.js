//* RN IMPORTS//
import { Platform, ScrollView, KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

//* AWS IMPORT//
import { DataStore, Auth } from 'aws-amplify';
import { Order, CartProduct, OrderProduct } from '../../models';

//* STYLE IMPORT//
import { AndroidView, styles } from './styles';

//* EXPO IMAGE//
import { Image } from 'expo-image';

//* CHECKOUT SCREEN CODE//
const CheckoutScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const navigation = useNavigation();

  const img = 'https://res.cloudinary.com/dwpkjvars/image/upload/v1685197967/hamburger-g174994245_1280_cuxslr.jpg';

  const saveOrder = async () => {
    //* Get User details
    const userData = await Auth.currentAuthenticatedUser();

    //* Create New order
    const newOrder = await DataStore.save(
      new Order({
        userSub: userData.attributes.sub,
        fullName: name,
        phone,
        address,
      }),
    );

    //* Fetch all cart products
    const cartItems = await DataStore.query(CartProduct, cp =>
      cp.userSub.eq(userData.attributes.sub),
    );

    //* Set all cart products to Order
    await Promise.all(
      cartItems.map(cartItem => DataStore.save(new OrderProduct({
        quantity: cartItem.quantity,
        orderProductProductId: cartItem.cartProductProductId,
        orderProductOrderId: newOrder.id,
      })))
    );

    //* Delete all cart products
    await Promise.all(
      cartItems.map(cartItem => DataStore.delete(cartItem))
    );

    //* Navigate to Home Screen
    navigation.navigate('Home');

  };

  return (
    <KeyboardAvoidingView style={[AndroidView, styles.page]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
    >
      <ScrollView>
        <View style={styles.head}>
          <Image
            style={styles.image}
            source={{ uri: img }}
            transition={1000}
          />
          <Text style={styles.title}>Order Confirmation</Text>
        </View>

        <View style={styles.userInfo}>
          <View style>
            <Text style={styles.inputTxt}>Name</Text>
            <TextInput
              style={styles.Input}
              placeholder='First Name, Last Name'
              placeholderTextColor='white'
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={styles.inputTxt}>Phone Number</Text>
            <TextInput
              style={styles.Input}
              textContentType='telephoneNumber'
              placeholder='785-xxx-xxxx'
              placeholderTextColor='white'
              keyboardType='number-pad'
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View style>
            <Text style={styles.inputTxt}>Address</Text>
            <TextInput
              style={styles.Input}
              textContentType='telephoneNumber'
              placeholder='332 SE Main st.'
              placeholderTextColor='white'
              keyboardType='default'
              value={address}
              onChangeText={setAddress}
            />
          </View>
        </View>


      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={saveOrder}>
        <Text style={styles.buttonTxt}>Submit</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default CheckoutScreen;
