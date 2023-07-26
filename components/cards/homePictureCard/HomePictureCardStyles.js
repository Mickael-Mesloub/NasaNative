import {StyleSheet} from 'react-native';
import {FONT, COLORS, SIZES, SHADOWS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  picOfTheDayCard: {
    padding: SIZES.medium,
    marginVertical: SIZES.medium,
    backgroundColor: COLORS.lightGrey,
  },

  shadowProp: {
    ...SHADOWS.small,
  },

  picOfTheDayTextsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  mainTitle: {
    fontFamily: FONT.semibold,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },

  picOfTheDayDate: {
    fontFamily: FONT.semibold,
    fontSize: SIZES.small,
    color: COLORS.tertiary,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    padding: SIZES.xSmall,
  },

  picOfTheDayImage: {
    width: '100%',
    height: 300,
    marginTop: SIZES.small,
    borderRadius: SIZES.small,
  },

  picOfTheDayTitle: {
    fontFamily: FONT.semiBoldItalic,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    textAlign: 'center',
  },

  picOfTheDayCopyright: {
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    color: COLORS.secondary,
    textAlign: 'center',
  },

  iconContainer: {
    borderRadius: SIZES.xxLarge,
    backgroundColor: COLORS.primary,
    padding: SIZES.xSmall,
  },
});
