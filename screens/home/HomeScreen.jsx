import {ActivityIndicator, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './HomeStyles';
import {API_URL, API_KEY} from '@env';
import {GET} from '../../helpers/fetch';
import {COLORS} from '../../constants/theme';
import PictureCard from '../../components/cards/PictureCard';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const search = async () => {
    try {
      const data = await GET(`${API_URL}?api_key=${API_KEY}`);
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    search();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={COLORS.tertiary} />
      ) : (
        <ScrollView>
          <PictureCard data={data} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
