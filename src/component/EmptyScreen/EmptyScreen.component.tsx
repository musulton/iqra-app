import React from 'react';
import {View, Text} from 'react-native';

import styles from './EmptyScreen.styles';

const EmptyScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.plainText}>{props.text}</Text>
    </View>
  );
};

export default EmptyScreen;
