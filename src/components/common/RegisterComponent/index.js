import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../Container';
import styles from './styles';
import Input from '../Input';
import CustomButton from '../CustomButton';
import {LOGIN} from '../../../constants/routeNames';
import {useNavigation} from '@react-navigation/core';

const RegisterComponent = () => {
  const {navigate} = useNavigation();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Container style1={{backgroundColor: 'white'}}>
      <Image
        source={require('../../../assets/images/register.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>Welcome to Native Contacts</Text>
        <Text style={styles.subtitle}>Create a free account</Text>
      </View>
      <View style={styles.inputTextWrapper}>
        <Input label="Username" placeholder="Enter Username" />
        <Input label="First Name" placeholder="Enter First Name" />
        <Input label="Last Name" placeholder="Enter Last Name" />
        <Input label="Email" placeholder="Enter Email" />
        <Input
          secureTextEntry
          label="Password"
          icon={<Text>Show</Text>}
          iconPosition="right"
          placeholder="Enter Password"
        />
      </View>
      <CustomButton primary title="Register" />
      <View style={styles.bottomWrapper}>
        <Text style={styles.bottomText}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigate(LOGIN)}>
          <Text style={styles.linkBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default RegisterComponent;
