import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './HomeStyles';
import {API_URL, API_KEY} from '@env';
import {GET} from '../../helpers/fetch';
import {COLORS} from '../../constants/theme';
import HomePictureCard from '../../components/cards/homePictureCard/HomePictureCard';
import PictureModal from '../../components/pictureModal/PictureModal';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const endpoint = '?api_key=';

  const fetchData = async () => {
    try {
      const data = await GET(`${API_URL}${endpoint}${API_KEY}`);
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
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={COLORS.secondary} />
      ) : (
        <View>
          <HomePictureCard
            data={data}
            handlePress={() => navigation.navigate('Gallery')}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
