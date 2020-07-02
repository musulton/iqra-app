import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import ItemCategory from '../ItemCategory';
import Config from './FavoritesList.config';
import styles from './FavoritesList.styles';

const FavoritesList = ({data}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item, i) => (
        <ItemCategory key={i} title={item.title} total={item.total} />
      ))}
    </ScrollView>
  );
};

FavoritesList.propTypes = Config.propTypes;
FavoritesList.defaultProps = Config.defaultProps;
FavoritesList.displayName = Config.displayName;

export default FavoritesList;
