import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StepOne from './Screens/Onboarding/StepOne';
import StepTwo from './Screens/Onboarding/StepTwo';
import StepThree from './Screens/Onboarding/StepThree';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="StepOneScreen"
          component={StepOne}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="StepTwoScreen"
          component={StepTwo}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="StepThreeScreen"
          component={StepThree}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
