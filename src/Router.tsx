import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StepOne from './Screens/Onboarding/StepOne';
import StepTwo from './Screens/Onboarding/StepTwo';
import StepThree from './Screens/Onboarding/StepThree';
import AccountInformation from './Screens/SignUp/AccountInformation';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
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
          name="SignUpScreen"
          component={AccountInformation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
