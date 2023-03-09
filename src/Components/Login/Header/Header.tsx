import React from 'react';
import {View, Text} from 'react-native';

import styles from './Header.style';

const Header = (props: {
  heading:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  description:
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
      <Text style={styles.heading}>{props.heading}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};

export default Header;
