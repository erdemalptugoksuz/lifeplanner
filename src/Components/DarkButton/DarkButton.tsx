import React from 'react';
import {TouchableOpacity, Text, GestureResponderEvent} from 'react-native';

import styles from './DarkButton.style';

const DarkButton = (props: {
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
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default DarkButton;
