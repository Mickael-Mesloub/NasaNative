import {StyleSheet} from 'react-native';
import {FONT, COLORS} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {},
  text: {
    color: COLORS.primary,
    fontFamily: FONT.semibold,
    fontSize: 32,
  },
  picOfTheDay: {
    width: 400,
    height: 400,
  },
});
