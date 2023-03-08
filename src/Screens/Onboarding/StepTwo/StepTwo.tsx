import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './StepTwo.style';
import PageSlogan from '../../../Components/Onboarding/PageSlogan';
import BottomProgress from '../../../Components/Onboarding/BottomProgress';

const StepOne = ({navigation}) => {
  const handleScreenMovement = () => {
    navigation.navigate('StepThreeScreen');
  };
  const handleSkipMovement = () => {
    navigation.navigate('StepThreeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <PageSlogan
          content={'Yapılacaklar Listesi'}
          description={
            'Basit ve anlaşılır arayüzümüz sayesinde görevlerinizi yerine getirmek tahmin ettiğinizden daha eğlenceli olacak.'
          }
          img={require('../../../Assets/Onboarding/img2.png')}
        />
        <BottomProgress
          nextOnPress={handleScreenMovement}
          skipOnPress={handleSkipMovement}
        />
      </View>
    </SafeAreaView>
  );
};

export default StepOne;
