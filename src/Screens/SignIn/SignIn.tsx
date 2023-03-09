import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import styles from './SignIn.style';
import Header from '../../Components/Login/Header';
import Input from '../../Components/Login/Input';
import DarkButton from '../../Components/DarkButton';
import LoginSwitch from '../../Components/Login/LoginSwitch';

const SignIn = ({navigation}) => {
  const handleSwitchLoginMovement = () => {
    navigation.navigate('AccountInformationScreen');
  };

  const handleForgotPasswordMovement = () => {
    navigation.navigate('VerifyAccountScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <Header
          heading={'Tekrar Hoş Geldin'}
          description={
            'Aramıza tekrar hoş geldin! Hadi hemen e-posta hesabını gir ve bağlan.'
          }
        />
        <View style={styles.inputContainer}>
          <Input inputName={'E-Posta'} textEntry={false} />
          <Input inputName={'Şifre'} textEntry={true} />
          <Text
            style={styles.forgotPassword}
            onPress={handleForgotPasswordMovement}>
            Şifremi Unuttum
          </Text>
        </View>
        <DarkButton title={'Giriş Yap'} onPress={null} />
        <LoginSwitch
          title={'Hesabın yok mu? Kayıt ol.'}
          onPress={handleSwitchLoginMovement}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
