import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './homeScreenStyles';
import {API_URL, API_KEY} from '@env';
import {GET} from '../../helpers/fetch';
import {formatDate} from '../../helpers/utils';
import {COLORS} from '../../constants/theme';

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
    <SafeAreaView>
      <TouchableOpacity onPress={search}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      {isLoading ? (
        <ActivityIndicator size={'large'} color={COLORS.tertiary} />
      ) : (
        <View>
          <Text style={styles.text}>{data?.title}</Text>
          <Text style={styles.text}>{formatDate(data?.date)}</Text>
          <Image
            source={{uri: data?.hdurl}}
            resizeMode="contain"
            style={styles.picOfTheDay}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
