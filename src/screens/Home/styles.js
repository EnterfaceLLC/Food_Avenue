// *REACT IMPORTS BELOW //
import { StyleSheet, Dimensions } from "react-native";

// *STYLE CODE BELOW //
const { height, width } = Dimensions.get('window');

//* THEME IMPORT//
import { theme } from '../../theme/theme';

//* STYLES CODE//
export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.cream,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
