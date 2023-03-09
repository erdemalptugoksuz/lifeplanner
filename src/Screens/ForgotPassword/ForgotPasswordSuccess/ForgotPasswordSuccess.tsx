import React from 'react';
import {SafeAreaView} from 'react-native';

import styles from './ForgotPasswordSuccess.style';
import Success from '../../../Components/Success';

const ForgotPasswordSuccess = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Success
        img={require('../../../Assets/Success/forgotPasswordSuccess.png')}
        title={'Yenilendi!'}
        description={
          'Şifren başarıyla yenilendi. Artık yeni şifrenle giriş yapabilirsin.'
        }
      />
    </SafeAreaView>
  );
};

export default ForgotPasswordSuccess;
