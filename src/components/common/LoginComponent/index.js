// Comment Added ...
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../Container';
import Input from '../Input';
import CustomButton from '../CustomButton';
import styles from './styles';
import {REGISTER} from '../../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Container style1={{backgroundColor: 'white'}}>
      <Image
        source={require('../../../assets/images/loginLogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.headerView}>
        <Text style={styles.title}>Welcome to Native Contacts</Text>
        <View style={styles.demo}>
          <Text style={styles.subtitle}>Please Login Here :</Text>
        </View>
      </View>
      <View style={styles.textInputWrapper}>
        <Input
          label="Username"
          placeholder="Enter Username"
          //error="This field is required"
        />
        <Input
          label="Password"
          placeholder="Enter Password"
          icon={<Text>Show</Text>}
          iconPosition="right"
          secureTextEntry
        />
      </View>
      <CustomButton primary title="Submit" />
      <View style={styles.bottomWrapper}>
        <Text style={styles.bottomText}>Need a new Account ?</Text>
        <TouchableOpacity onPress={() => navigate(REGISTER)}>
          <Text style={styles.registerButton}>Register here</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginComponent;
