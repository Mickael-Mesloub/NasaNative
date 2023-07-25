import {View, Text, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './PictureCardStyles';
import {formatDate} from '../../helpers/utils';
import {COLORS} from '../../constants/theme';

const PictureCard = ({data}) => {
  return (
    <View style={[styles.picOfTheDayCard, styles.shadowProp]}>
      <View style={styles.picOfTheDayTextsContainer}>
        <Text style={styles.mainTitle}>Astronomy Picture Of the Day</Text>

        <Text style={styles.picOfTheDayDate}>{formatDate(data?.date)}</Text>
      </View>
      {data.hdurl ? (
        <Image
          source={{uri: data?.hdurl}}
          resizeMode="cover"
          style={styles.picOfTheDayImage}
        />
      ) : (
        <ActivityIndicator size={'large'} color={COLORS.tertiary} />
      )}

      <Text style={styles.picOfTheDayTitle}>{data?.title}</Text>
      <Text style={styles.picOfTheDayCopyright}>{data?.copyright}</Text>
    </View>
  );
};

export default PictureCard;
