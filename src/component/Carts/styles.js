// *REACT IMPORTS BELOW //
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *STYLE CODE BELOW //
const { height, width } = Dimensions.get('window');

//* THEME IMPORT//
import { theme } from '../../theme/theme';

//* STYLES CODE//
const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  qty: {
    fontSize: 15,
    backgroundColor: theme.pink,
    width: 30,
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50
  },
  title: {
    fontSize: 30,
    fontWeight: '200',
    color: theme.blue
  },
  productInfo: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    width: '75%'
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
