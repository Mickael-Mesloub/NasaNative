import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ScreenHeaderStyles';

const ScreenHeader = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeader;
