//* RN IMPORTS//
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

//* STYLE, ICON, THEME IMPORTS//
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../theme/theme';

//* EXPO IMAGE//
import { Image } from 'expo-image';

//* PRODUCT LIST COMPONENTS//

const ProductList = ({ list }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={list.image}
        transition={1000}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{list.name}</Text>
        <Text style={styles.price}>${list.price}</Text>
        <View style={styles.desContainer}>
          <Text numberOfLines={2} style={styles.description}>{list.description}</Text>
          <TouchableOpacity style={styles.details} onPress={() => navigation.navigate('Products')}>
            <Ionicons name="open-outline" size={24} color={theme.pink} />
            <Text style={styles.iconTxt}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductList;
