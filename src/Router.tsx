import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StepOne from './Screens/Onboarding/StepOne';
import StepTwo from './Screens/Onboarding/StepTwo';
import StepThree from './Screens/Onboarding/StepThree';

import AccountInformation from './Screens/SignUp/AccountInformation';
import PersonalInformation from './Screens/SignUp/PersonalInformation';
import SignUpSuccess from './Screens/SignUp/SignUpSuccess';

import SignIn from './Screens/SignIn';

import ResetPassword from './Screens/ForgotPassword/ResetPassword';
import VerifyAccount from './Screens/ForgotPassword/VerifyAccount';
import ForgotPasswordSuccess from './Screens/ForgotPassword/ForgotPasswordSuccess';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <Stack.Navigator>
        <Stack.Screen
          name="StepOneScreen"
          component={StepOne}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StepTwoScreen"
          component={StepTwo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StepThreeScreen"
          component={StepThree}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AccountInformationScreen"
          component={AccountInformation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PersonalInformationScreen"
          component={PersonalInformation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpSuccessScreen"
          component={SignUpSuccess}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VerifyAccountScreen"
          component={VerifyAccount}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPasswordSuccessScreen"
          component={ForgotPasswordSuccess}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
