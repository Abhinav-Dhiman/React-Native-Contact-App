import {View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
const Container = ({style, children, style1}) => {
  return (
    <ScrollView style={[styles.outerContainer, style1]}>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;
