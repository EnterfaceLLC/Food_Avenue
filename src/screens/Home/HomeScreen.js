//* RN IMPORTS//
import { View, Text, FlatList } from 'react-native'

//* STYLE IMPORT//
import { AndroidView, styles } from './styles';

//* COMPONENT IMPORT//
import ProductList from '../../component/Products/ProductList';

//* DATA IMPORT//
import food from '../../../assets/data/food.json';

//* HOME SCREEN CODE//
const HomeScreen = () => {
  return (
    <View style={[AndroidView, styles.page]}>
      <Text style={styles.title}>Welcome</Text>
      <FlatList
        data={food}
        renderItem={({ item }) => <ProductList list={item} />}
      />
    </View>
  );
};

export default HomeScreen;
