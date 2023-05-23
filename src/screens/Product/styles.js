// *REACT IMPORTS BELOW //
import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

// *STYLE CODE BELOW //
const { height, width } = Dimensions.get('window');

//* THEME IMPORT//
import { theme } from '../../theme/theme';

//* STYLES CODE//
const Android = Platform.OS === 'android';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.cream,
    justifyContent: 'space-between',
  },
  head: {
    backgroundColor: theme.blue,
    padding: 10,
    marginRight: '20%',
    marginTop: 15,
    borderBottomRightRadius: 25,
    borderBottomWidth: 5,
    borderColor: theme.pink
  },
  name: {
    fontSize: 26,
    color: theme.wht,
    fontWeight: '200',
    textAlign: 'right'
  },
  image: {
    width: 250,
    height: 250,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: theme.pink,
    alignSelf: 'center',
    elevation: 3
  },
  description: {
    backgroundColor: theme.blue,
    marginLeft: '20%',
    borderBottomLeftRadius: 25,
    borderBottomWidth: 5,
    borderColor: theme.pink
  },
  desTxt: {
    fontSize: 15,
    padding: 15,
    color: theme.wht,
    fontWeight: '200',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  qtyTxt: {
    fontSize: 30,
    fontWeight: '500',
    marginHorizontal: 20,
    textDecorationLine: 'underline'
  },
  button: {
    backgroundColor: theme.grn,
    width: width,
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // position: 'absolute',
    // bottom: 0,
  },
  price: {
    fontSize: 20,
    fontWeight: '500',
    padding: 15,
  },
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
