import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';
import {
  CONTACT_LIST,
  CONTACT_DETAILS,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
