import React from 'react';
import {View, Text} from 'react-native';

import styles from './PlainScreen.styles';

const PlainScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.plainText}>{props.text}</Text>
    </View>
  );
};

export default PlainScreen;
