import React from 'react';
import {View, Text} from 'react-native';

import styles from './Dashboard.styles';
import CategoryList from '../../component/CategoryList';
import FavoritesList from '../../component/FavoritesList/FavoritesList.component';

const data = [
  {title: 'Home', total: 110},
  {title: 'About', total: 130},
  {title: 'Search', total: 150},
  {title: 'Favorites', total: 160},
];

const SectionOne = () => {
  return (
    <View style={styles.sectionOne}>
      <Text style={styles.title}>Favorites Read</Text>
      <FavoritesList data={data} />
    </View>
  );
};

const SectionTwo = () => {
  return (
    <View style={styles.sectionTwo}>
      <Text style={styles.title}>Category Books</Text>
      <CategoryList data={data} />
    </View>
  );
};

const Dashboard = () => (
  <View style={styles.container}>
    <SectionOne />
    <SectionTwo />
  </View>
);

export default Dashboard;
