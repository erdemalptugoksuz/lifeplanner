import React from 'react';
import {View, Text, GestureResponderEvent} from 'react-native';

import styles from './BottomProgress.style';

const BottomProgress = (props: {
  skipOnPress: ((event: GestureResponderEvent) => void) | undefined;
  nextOnPress: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.skip} onPress={props.skipOnPress}>
        Geç
      </Text>
      <View style={styles.screenDotContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <Text style={styles.next} onPress={props.nextOnPress}>
        İlerle
      </Text>
    </View>
  );
};

export default BottomProgress;
