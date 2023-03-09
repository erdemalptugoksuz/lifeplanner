import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './StepOne.style';
import PageSlogan from '../../../Components/Onboarding/PageSlogan';
import BottomProgress from '../../../Components/Onboarding/BottomProgress';

const StepOne = ({navigation}) => {
  const handleScreenMovement = () => {
    navigation.navigate('StepTwoScreen');
  };
  const handleSkipMovement = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <PageSlogan
          content={'Bütçe Yöneticisi'}
          description={
            'Gelirlerinizi ve giderlerinizi tek bir yerden yönetin. Harcamalarınızı gruplandırın ve ne harcayıp kazandığınızı bilin.'
          }
          img={require('../../../Assets/Onboarding/img1.png')}
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
