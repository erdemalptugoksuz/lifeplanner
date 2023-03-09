import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './ResetPassword.style';
import Header from '../../../Components/Login/Header';
import Input from '../../../Components/Login/Input';
import DarkButton from '../../../Components/DarkButton';
import ReturnPage from '../../../Components/ReturnPage';

const ResetPassword = ({navigation}) => {
  const handleScreenMovement = () => {
    navigation.navigate('ForgotPasswordSuccessScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ReturnPage onPress={() => navigation.goBack()} />
      <View style={styles.bodyContainer}>
        <Header
          heading={'Harika'}
          description={
            'Haydi şu unutulan şifrenin yerine daha akılda kalıcı bir şifre koyalım.'
          }
        />
        <View style={styles.inputContainer}>
          <Input inputName={'Yeni Şifre'} textEntry={true} />
          <Input inputName={'Yeni Şifre Tekrar'} textEntry={true} />
        </View>
        <DarkButton title={'Şifreni Yenile'} onPress={handleScreenMovement} />
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
