import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './PictureCardStyles';
import {formatDate} from '../../helpers/utils';

const PictureCard = ({data}) => {
  return (
    <View style={[styles.picOfTheDayCard, styles.shadowProp]}>
      <View style={styles.picOfTheDayTextsContainer}>
        <Text style={styles.mainTitle}>Astronomy Picture Of the Day</Text>

        <Text style={styles.picOfTheDayDate}>{formatDate(data?.date)}</Text>
      </View>
      <Image
        source={{uri: data?.hdurl}}
        resizeMode="cover"
        style={styles.picOfTheDayImage}
      />
      <Text style={styles.picOfTheDayTitle}>{data?.title}</Text>
      <Text style={styles.picOfTheDayCopyright}>{data?.copyright}</Text>
    </View>
  );
};

export default PictureCard;
