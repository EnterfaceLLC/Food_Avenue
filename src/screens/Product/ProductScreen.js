//* RN IMPORTS//
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

//* AWS IMPORT//
import { Auth, DataStore } from 'aws-amplify';
import { Product } from '../../models';
import '@azure/core-asynciterator-polyfill';

//* STYLE, ICON IMPORTS//
import { AndroidView, styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

//* EXPO IMAGE//
import { Image } from 'expo-image';

//* DATA IMPORT//
import food from '../../../assets/data/food.json';

//* PRODUCT SCREEN CODE//
// const entree = food[0];

const ProductScreen = () => {
  const [product, setProduct] = useState(null);
  const [itemQty, setItemQty] = useState(1);

  const route = useRoute();
  const id = route.params?.id;

  useEffect(() => {
    if (!id) {
      return;
    }
    DataStore.query(Product, id).then(setProduct);
  }, [id]);

  const minus = () => {
    if (itemQty > 1) {
      setItemQty(itemQty - 1);
    }
  };

  const plus = () => {
    setItemQty(itemQty + 1);
  };

  const getTotal = () => {
    return (product.price * itemQty).toFixed(2);
  };

  if (!product) {
    return <ActivityIndicator size={100} />
  };

  return (
    <View style={[AndroidView, styles.page]}>
      <View style={styles.head}>
        <Text style={styles.name}>{product.name}</Text>
      </View>
      <Image
        style={styles.image}
        source={product.image}
        transition={1000}
      />

      <View style={styles.description}>
        <Text style={styles.desTxt}>{product.description}</Text>
      </View>


      <View style={styles.qtyContainer}>
        <AntDesign name="minuscircleo" size={50} color="black" onPress={minus} />
        <Text style={styles.qtyTxt}>{itemQty}</Text>
        <AntDesign name="pluscircleo" size={50} color="black" onPress={plus} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.price}>${getTotal()}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;
