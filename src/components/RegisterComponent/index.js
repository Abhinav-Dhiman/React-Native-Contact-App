import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../common/Container';
import styles from './styles';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import {LOGIN} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/core';

const RegisterComponent = ({onSubmit, onChange, form, errors}) => {
  const {navigate} = useNavigation();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Container style1={{backgroundColor: 'white'}}>
      <Image
        source={require('../../assets/images/register.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>Welcome to Native Contacts</Text>
        <Text style={styles.subtitle}>Create a free account</Text>
      </View>
      <View style={styles.inputTextWrapper}>
        <Input
          label="Username"
          placeholder="Enter Username"
          onChangeText={value => {
            onChange({name: 'userName', value});
          }}
          error={errors.userName}
        />
        <Input
          label="First Name"
          placeholder="Enter First Name"
          onChangeText={value => {
            onChange({name: 'firstName', value});
          }}
          error={errors.firstName}
        />
        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          onChangeText={value => {
            onChange({name: 'lastName', value});
          }}
          error={errors.lastName}
        />
        <Input
          label="Email"
          placeholder="Enter Email"
          onChangeText={value => {
            onChange({name: 'email', value});
          }}
          error={errors.email}
        />
        <Input
          secureTextEntry
          label="Password"
          icon={<Text>Show</Text>}
          iconPosition="right"
          placeholder="Enter Password"
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
          error={errors.password}
        />
      </View>
      <CustomButton onPress={onSubmit} primary title="Register" />
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
