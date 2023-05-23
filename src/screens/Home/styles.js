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
    padding: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: '200',
    color: theme.blue
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export const AndroidView = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});
