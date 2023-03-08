import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './StepThree.style';
import PageSlogan from '../../../Components/Onboarding/PageSlogan';
import BottomProgress from '../../../Components/Onboarding/BottomProgress';

const StepOne = ({navigation}) => {
  const handleScreenMovement = () => {
    navigation.navigate('StepThreeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <PageSlogan
          content={'Entegre Takvim'}
          description={
            'Özelliklere bağlı takvim sayesinde bütün verilerinize kolay bir şekilde takvimden ulaşabileceksiniz.'
          }
          img={require('../../../Assets/Onboarding/img3.png')}
        />
        <BottomProgress onPress={handleScreenMovement} />
      </View>
    </SafeAreaView>
  );
};

export default StepOne;
