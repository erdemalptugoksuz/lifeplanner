import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './VerifyAccount.style';
import Header from '../../../Components/Login/Header';
import Input from '../../../Components/Login/Input';
import DarkButton from '../../../Components/DarkButton';

const VerifyAccount = ({navigation}) => {
  const handleScreenMovement = () => {
    navigation.navigate('ResetPasswordScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <Header
          heading={'Tüh be!'}
          description={
            'Şifreni mi unuttun? Hiç sorun değil! Güvenlik sorun ile hemen yenisini al.'
          }
        />
        <View style={styles.inputContainer}>
          <Input inputName={'E-Posta'} textEntry={false} />
          <Input inputName={'En Sevdiğin Hayvan'} textEntry={false} />
        </View>
        <DarkButton title={'Doğrula'} onPress={handleScreenMovement} />
      </View>
    </SafeAreaView>
  );
};

export default VerifyAccount;
