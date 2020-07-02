import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  columnTwo: {
    height: 80,
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    backgroundColor: 'yellow',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
  },
  totalText: {
    fontSize: 12,
    color: 'grey',
  },
});
