import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './PersonalInformation.style';
import ReturnPage from '../../../Components/ReturnPage';
import Header from '../../../Components/Login/Header';
import Input from '../../../Components/Login/Input';
import DarkButton from '../../../Components/DarkButton';

const PersonalInformation = ({navigation}) => {
  const handleScreenMovement = () => {
    navigation.navigate('SignUpSuccessScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <ReturnPage onPress={() => navigation.goBack()} />
        <Header
          heading={'Kişisel Bilgilerin'}
          description={
            'Sana ne diye hitap edelim? Şifreni unutursan bu bilgiler işine yarayacak.'
          }
        />
        <View style={styles.inputContainer}>
          <Input inputName={'İsim'} textEntry={false} />
          <Input inputName={'Soy İsim'} textEntry={false} />
          <Input inputName={'En Sevdiğin Hayvan'} textEntry={false} />
        </View>
        <DarkButton title={'Kayıt Ol'} onPress={handleScreenMovement} />
      </View>
    </SafeAreaView>
  );
};

export default PersonalInformation;
