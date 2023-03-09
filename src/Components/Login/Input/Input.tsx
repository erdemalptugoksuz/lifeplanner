import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Input.style';

const Input = (props: {
  inputName:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  textEntry: boolean | undefined;
}) => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.inputName}>{props.inputName}</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={onChangeText}
        value={text}
        secureTextEntry={props.textEntry}
      />
    </View>
  );
};

export default Input;
