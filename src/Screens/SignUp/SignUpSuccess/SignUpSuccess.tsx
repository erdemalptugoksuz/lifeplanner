import React from 'react';
import {SafeAreaView} from 'react-native';

import Success from '../../../Components/Success';
import styles from './SignUpSuccess.style';

const SignUpSuccess = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Success
        img={require('../../../Assets/Success/signUpSuccess.png')}
        title={'Yaşasın!'}
        description={'Artık uygulamayı kullanmaya hazırsın!'}
      />
    </SafeAreaView>
  );
};

export default SignUpSuccess;
