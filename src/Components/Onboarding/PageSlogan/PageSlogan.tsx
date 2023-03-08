import React from 'react';
import {View, Image, Text, ImageSourcePropType} from 'react-native';

import styles from './PageSlogan.style';

const PageSlogan = (props: {
  img: ImageSourcePropType;
  content:
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
      <Image style={styles.image} source={props.img} />
      <Text style={styles.content}>{props.content}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};

export default PageSlogan;
