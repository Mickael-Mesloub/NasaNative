import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GET} from '../../helpers/fetch';
import {API_URL, API_KEY} from '@env';
import HomePictureCard from '../../components/cards/homePictureCard/HomePictureCard';
import {ActivityIndicator} from 'react-native-paper';
import {COLORS, SIZES} from '../../constants/theme';
import {styles} from './GalleryStyles';
import DateTimePicker from '../../components/datePicker/DateTimePicker';
import {formatDate} from '../../helpers/utils';
import PictureModal from '../../components/pictureModal/PictureModal';

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isReversed, setIsReversed] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [filteredImages, setFilteredImages] = useState([]);

  const endpoints = ['?api_key=', '&start_date=2023-07-20'];

  const fetchData = async () => {
    try {
      const data = await GET(
        `${API_URL}${endpoints[0]}${API_KEY}${endpoints[1]} `,
      );
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.galleryPictureWrapper}>
        <Image
          source={{uri: item.url}}
          resizeMode="cover"
          style={styles.galleryPicture}
        />
      </View>
    );
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  // Reverses the data order
  const toggleOrder = () => {
    setIsReversed(!isReversed);
  };

  // Displays the data items from the most recent to older, or the other way
  const displayedData = isReversed ? [...data].reverse() : data;

  // ******************** ******************** ******************** ******************** ******************** ********************
  // ******************** WIP - TESTS FOR FILTERING/SORTING DATA ******************** ******************** ***********************
  // ******************** ******************** ******************** **************************************** *********************

  //   useEffect(() => {
  //     let testDate = new Date();
  //     testDate.setDate(testDate.getDate() - 2);
  //     const fullDate = formatDate(testDate);

  //     if (data) {
  //       const filteredData = data.filter(item => item.date === fullDate);
  //       setFilteredImages(filteredData);
  //       console.log('FILTERED PICTURE DATE = ' + filteredData);
  //       console.log('FULLDATE =' + fullDate);
  //     }
  //   }, [date]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Gallery</Text>
      <View style={styles.filterBar}>
        <DateTimePicker data={data} />
        {/* <Pressable style={styles.filterBtn}>
          <Text style={styles.filterBtnText}>Filter</Text>
        </Pressable> */}
      </View>

      <Pressable onPress={toggleOrder}>
        <Text style={{color: COLORS.primary}}>Toggle order</Text>
      </Pressable>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={COLORS.secondary} />
      ) : (
        <>
          {data && (
            <>
              <PictureModal imageData={data} />
              <FlatList
                data={displayedData}
                renderItem={renderItem}
                keyExtractor={item => item.date}
              />
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default Gallery;
