import React from 'react'
import { View, Text } from 'react-native'
import styles from './Slide.styles';

export const Slide = (props: any) => {
  const { title } = props;
  return (
    <View style={styles.slide}>
      <Text style={{ ...styles.slideText }}>
        {title}
      </Text>
    </View>
  );
}

export default Slide;