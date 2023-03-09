import React from 'react';
import {View, Text, GestureResponderEvent} from 'react-native';

import styles from './LoginSwitch.style';

const LoginSwitch = (props: {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={props.onPress}>
        {props.title}
      </Text>
    </View>
  );
};

export default LoginSwitch;
