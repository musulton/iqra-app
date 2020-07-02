import React from 'react';
import {View, Text} from 'react-native';

import styles from './Card.styles';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>1</Text>
    </View>
  );
};

export default Card;
