import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DatePickerModal from '../../components/datePicker/DatePicker';
import {GET} from '../../helpers/fetch';
import {API_URL, API_KEY} from '@env';
import HomePictureCard from '../../components/cards/homePictureCard/HomePictureCard';
import {ActivityIndicator} from 'react-native-paper';
import {COLORS} from '../../constants/theme';

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isReversed, setIsReversed] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const endpoints = ['?api_key=', '&start_date=2023-07-01'];

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

  // Toggle the order to reverse the data
  const toggleOrder = () => {
    setIsReversed(!isReversed);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    console.log(open);
    console.log(date);
  }, [open, date]);

  // Reverse the data
  const displayedData = isReversed ? [...data].reverse() : data;

  return (
    <SafeAreaView>
      <Text>Gallery</Text>
      <DatePickerModal
        date={date}
        setDate={setDate}
        open={open}
        setOpen={setOpen}
      />
      <Pressable onPress={toggleOrder}>
        <Text style={{color: COLORS.green}}>Toggle order</Text>
      </Pressable>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={COLORS.tertiary} />
      ) : (
        <>
          <FlatList
            data={displayedData}
            renderItem={({item}) => <HomePictureCard data={item} />}
          />
          <HomePictureCard
            data={data}
            handlePress={() => navigation.navigate('Gallery')}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Gallery;
