//* RN IMPORTS//
import { Platform, ScrollView, KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

//* STYLE IMPORT//
import { AndroidView, styles } from './styles';

//* EXPO IMAGE//
import { Image } from 'expo-image';

//* CHECKOUT SCREEN CODE//
const CheckoutScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const img = 'https://res.cloudinary.com/dwpkjvars/image/upload/v1685197967/hamburger-g174994245_1280_cuxslr.jpg';

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
          <Text style={styles.title}>CheckoutScreen</Text>
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
              keyboardType='number-pad'
              value={address}
              onChangeText={setAddress}
            />
          </View>
        </View>


      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTxt}>Checkout</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default CheckoutScreen;
