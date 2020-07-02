import React from 'react';
import {ScrollView, View} from 'react-native';

import ItemCategory from '../ItemCategory';
import Config from './CategoryList.config';
import styles from './CategoryList.styles';

const CategoryList = ({data, scroll}) => {
  const ViewElement = scroll ? ScrollView : View;
  return (
    <ViewElement style={styles.container}>
      {data.map((item, i) => (
        <ItemCategory key={i} title={item.title} total={item.total} />
      ))}
    </ViewElement>
  );
};

CategoryList.propTypes = Config.propTypes;
CategoryList.defaultProps = Config.defaultProps;
CategoryList.displayName = Config.displayName;

export default CategoryList;
