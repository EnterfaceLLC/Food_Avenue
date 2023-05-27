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
    // padding: 5,
  },
  head: {
    flexDirection: 'row',
    backgroundColor: theme.blue,
    // width: width,
    // height: 100,
    padding: 10,
    marginLeft: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomWidth: 5,
    borderColor: theme.pink,
  },
  title: {
    fontSize: 30,
    fontWeight: '200',
    color: theme.wht,
    marginLeft: 10
  },
  summaryCont: {
    flexDirection: 'row',
    backgroundColor: theme.blue,
    padding: 10,
    justifyContent: 'space-evenly',
    marginVertical: 10,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: theme.pink
  },
  label: {
    color: theme.wht
  },
  price: {
    color: theme.wht,
    fontWeight: '500'
  },
  button: {
    backgroundColor: theme.grn,
    width: width,
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 3
  },
  buttonTxt: {
    fontSize: 20,
    padding: 15,
  }
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
