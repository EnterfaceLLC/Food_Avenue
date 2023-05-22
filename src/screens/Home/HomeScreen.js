//* RN IMPORTS//
import { View, Text, FlatList } from 'react-native'

//* STYLE IMPORT//
import { styles } from './styles';

//* DATA IMPORT//
import food from '../../../assets/data/food.json';
import ProductList from '../../component/Products/ProductList';

//* HOME SCREEN CODE//
const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <Text>HomeScreen</Text>
      <FlatList
        data={food}
        renderItem={({ item }) => <ProductList list={item} />}
      />
    </View>
  )
}

export default HomeScreen;
