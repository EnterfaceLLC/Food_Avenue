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
  },
  head: {
    alignItems: 'center',
  },
  image: {
    width: width,
    aspectRatio: 4 / 3,
    borderBottomLeftRadius: 60
  },
  title: {
    fontSize: 28,
    fontWeight: '200'
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputTxt: {
    fontSize: 22,
    fontWeight: '200',
    textAlign: 'right',
    color: theme.blue,
    marginBottom: 5
  },
  Input: {
    backgroundColor: theme.blue,
    color: theme.wht,
    height: 45,
    paddingLeft: 15,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomWidth: 5,
    borderColor: theme.pink,
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
