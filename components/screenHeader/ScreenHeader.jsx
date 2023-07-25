import {Image, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './ScreenHeaderStyles';

const ScreenHeader = ({iconUrl, dimension, handlePress}) => {
  return (
    <Pressable style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </Pressable>
  );
};

export default ScreenHeader;
