// *REACT IMPORTS BELOW //
import { StyleSheet, Dimensions } from "react-native";

// *STYLE CODE BELOW //
const { height, width } = Dimensions.get('window');

//* THEME IMPORT//
import { theme } from '../../theme/theme';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 5
  },
  image: {
    width: 150,
    height: 150,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50
  },
  icon: {
    position: 'relative',
    bottom: 30,
    left: 20,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 5
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: theme.pink
  },
  price: {
    fontSize: 15,
  },
  desContainer: {
    backgroundColor: theme.grn,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
  },
  description: {
    fontSize: 12,
    marginBottom: 5
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
