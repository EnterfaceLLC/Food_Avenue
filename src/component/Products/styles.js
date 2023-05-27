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
  },
  image: {
    width: 150,
    height: 150,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 5
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: theme.grn
  },
  price: {
    fontSize: 15,
  },
  desContainer: {
    backgroundColor: theme.blue,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
  },
  description: {
    fontSize: 12,
    color: theme.wht,
    marginBottom: 5
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconTxt: {
    color: theme.pink
  }
});
