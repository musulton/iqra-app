import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import Config from './ItemCategory.config';
import styles from './ItemCategory.styles';
import Card from '../Card';

const ColumnOne = () => {
  return (
    <View>
      <Card />
    </View>
  );
};

const ColumnTwo = ({title, total}) => {
  return (
    <View style={styles.columnTwo}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.totalText}>Total: {total}</Text>
    </View>
  );
};

const CategoryItem = ({title, total, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ColumnOne />
      <ColumnTwo title={title} total={total} />
    </TouchableOpacity>
  );
};

CategoryItem.propTypes = Config.propTypes;
CategoryItem.displayName = Config.displayName;

export default CategoryItem;
