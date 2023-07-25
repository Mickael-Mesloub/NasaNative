import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './GalleryStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants/theme';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Gallery = () => {
  return (
    <View>
      <Text>Gallery</Text>
      <FontAwesomeIcon name="github" size={16} color="red" />
    </View>
  );
};

export default Gallery;
