import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import colors from '../../../assets/themes/colors';
const CustomButton = ({
  title,
  primary,
  secondary,
  danger,
  disabled,
  loading,
  onPress,
  ...props
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, {backgroundColor: getBgColor()}]}
      onPress={onPress}
      {...props}>
      <View style={loading ? styles.loaderSection : null}>
        {loading && <ActivityIndicator color="white" />}
        {title && (
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: disabled ? 'black' : 'white',
              fontWeight: '500',
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
