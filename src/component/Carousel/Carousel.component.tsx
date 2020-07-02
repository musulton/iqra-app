import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Stat from './Stat';
import Slide from './Slide';
import styles from './Carousel.styles.jsx';

const Carousel = (props: any) => {
  const {items, style} = props;
  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const itemPerInterval =
    props.itemPerInterval === undefined ? 1 : props.itemPerInterval;

  const init = w => {
    // iniitalise width
    setWidth(w);
    // get total items present
    const totalItems = items.length;
    // initialise total interval
    setIntervals(Math.ceil(totalItems / itemPerInterval));
  };

  const getInterval = (offset: number) => {
    for (let i = 1; i < intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }
  };

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{...styles.bullet, opacity: interval === i ? 0.5 : 0.1}}>
        &bull;
      </Text>,
    );
  }

  return (
    <View style={style.container}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        scrollEventThrottle={200}
        decelerationRate={'fast'}>
        {items.map((item, index) => {
          switch (style) {
            case 'stats':
              return <Stat key={index} label={item.label} value={item.value} />;
            default:
              return <Slide key={index} title={item.title} />;
          }
        })}
      </ScrollView>
      <View style={styles.bullets}>{bullets}</View>
    </View>
  );
};

export default Carousel;
