import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginTop: 6,
  },
  textInput: {
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    paddingVertical: 10,
  },
  errorText: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
