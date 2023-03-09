import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './AccountInformation.style';
import Header from '../../../Components/Login/Header';
import Input from '../../../Components/Login/Input';
import DarkButton from '../../../Components/DarkButton';
import LoginSwitch from '../../../Components/Login/LoginSwitch';

const AccountInformation = ({navigation}) => {
  const handleScreenMovement = () => {
    navigation.navigate('PersonalInformationScreen');
  };

  const handleSwitchLoginMovement = () => {
    navigation.navigate('SignInScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <Header
          heading={'Hesap Bilgilerin'}
          description={
            'Hesabın ile bağlantını kaybetmemen için e-posta hesabın ile kayıt olman gerek.'
          }
        />
        <View style={styles.inputContainer}>
          <Input inputName={'E-Posta'} textEntry={false} />
          <Input inputName={'Şifre'} textEntry={true} />
          <Input inputName={'Şifre Tekrar'} textEntry={true} />
        </View>
        <DarkButton title={'İlerle'} onPress={handleScreenMovement} />
        <LoginSwitch
          title={'Hesabın var mı? Giriş yap.'}
          onPress={handleSwitchLoginMovement}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountInformation;
