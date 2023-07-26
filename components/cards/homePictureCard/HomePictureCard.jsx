import {View, Text, Image, ActivityIndicator, Pressable} from 'react-native';
import React from 'react';
import {styles} from './HomePictureCardStyles';
import {COLORS, SIZES} from '../../../constants/theme';
import IconButton from '../../iconButton/IconButton';
import Share from 'react-native-share';

const PictureCard = ({data, handlePress}) => {
  const share = () => {
    const options = {
      message: `Check this out ! ${data?.title}`,
      url: data?.url,
    };

    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <Pressable
      style={[styles.picOfTheDayCard, styles.shadowProp]}
      onPress={handlePress}>
      <View style={styles.picOfTheDayTextsContainer}>
        <Text style={styles.mainTitle}>Picture Of the Day</Text>

        <Text style={styles.picOfTheDayDate}>{data?.date}</Text>
        <View style={styles.iconContainer}>
          <IconButton
            iconOptions={{
              name: 'share-social',
              size: SIZES.large,
              color: COLORS.tertiary,
            }}
            onPress={share}
          />
        </View>
      </View>
      {data.url ? (
        <>
          <Image
            source={{uri: data?.url}}
            resizeMode="cover"
            style={styles.picOfTheDayImage}
          />
        </>
      ) : (
        <ActivityIndicator size={'large'} color={COLORS.secondary} />
      )}
      <View style={{paddingTop: SIZES.small}}>
        <Text style={styles.picOfTheDayTitle}>{data?.title}</Text>
        <Text style={styles.picOfTheDayCopyright}>{data?.copyright}</Text>
      </View>
    </Pressable>
  );
};

export default PictureCard;
