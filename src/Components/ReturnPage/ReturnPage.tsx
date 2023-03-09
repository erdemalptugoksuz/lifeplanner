import React from 'react';
import {TouchableOpacity, Image, GestureResponderEvent} from 'react-native';

import styles from './ReturnPage.style';

const ReturnPage = (props: {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        style={styles.img}
        source={require('../../Assets/Arrow/arrow-left.png')}
      />
    </TouchableOpacity>
  );
};

export default ReturnPage;
