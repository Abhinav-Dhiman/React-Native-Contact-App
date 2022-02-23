import {View, TextInput, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import colors from '../../../assets/themes/colors';

const Input = ({
  onChangeText,
  icon,
  style,
  value,
  label,
  iconPosition,
  error,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const getFlexDirection = () => {
    return icon && iconPosition === 'right' ? 'row-reverse' : 'row';
  };
  const getBorderColor = () => {
    if (focus) {
      return colors.primary;
    } else {
      return error ? colors.danger : colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          // {alignItems: icon ? 'center' : 'baseline'},
          {flexDirection: getFlexDirection()},
          {borderColor: getBorderColor()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;
