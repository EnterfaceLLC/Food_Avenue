//* RN IMPORTS//
import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

//* STYLE, ICON IMPORTS//
import { AndroidView, styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

//* EXPO IMAGE//
import { Image } from 'expo-image';

//* DATA IMPORT//
import food from '../../../assets/data/food.json';

//* PRODUCT SCREEN CODE//
const entree = food[0];

const ProductScreen = () => {
  // const [entree, setEntree] = useState(null);
  const [itemQty, setItemQty] = useState(1);

  const minus = () => {
    if (itemQty > 1) {
      setItemQty(itemQty - 1);
    }
  };

  const plus = () => {
    setItemQty(itemQty + 1);
  };

  const getTotal = () => {
    return (entree.price * itemQty).toFixed(2);
  };

  return (
    <View style={[AndroidView, styles.page]}>
      <View style={styles.head}>
        <Text style={styles.name}>{food[0].name}</Text>
      </View>
      <Image
        style={styles.image}
        source={food[0].image}
        transition={1000}
      />

      <View style={styles.description}>
        <Text style={styles.desTxt}>{food[0].description}</Text>
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
