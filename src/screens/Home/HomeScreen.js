//* RN IMPORTS//
import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

//* AWS IMPORT//
import { Auth, DataStore } from 'aws-amplify';
import { Product } from '../../models';
import '@azure/core-asynciterator-polyfill';

//* STYLE IMPORT//
import { AndroidView, styles } from './styles';

//* COMPONENT IMPORT//
import ProductList from '../../component/Products/ProductList';

//* DATA IMPORT//
// import food from '../../../assets/data/food.json';

//* HOME SCREEN CODE//
const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
  }, []);

  return (
    <View style={[AndroidView, styles.page]}>
      <View style={styles.head}>
        <Text style={styles.title}>Welcome</Text>
        <Text onPress={() => Auth.signOut()}>Log-out</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductList product={item} />}
      />
    </View>
  );
};

export default HomeScreen;
