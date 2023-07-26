const COLORS = {
  primary: '#009688',
  secondary: 'rgba(255, 55, 24, 0.70)',
  tertiary: '#EFEFEF',
  grey: '#9C9C9C',
  lightGrey: 'rgba(231, 231, 231, 0.8)',
  red: '#ED1F43',
  primaryTransp: 'rgba(0, 150, 136, 0.2)',
};

const FONT = {
  black: 'TitilliumWeb-Black',
  bold: 'TitilliumWeb-Bold',
  boldItalic: 'TitilliumWeb-BoldItalic',
  italic: 'TitilliumWeb-Italic',
  regular: 'TitilliumWeb-Regular',
  semibold: 'TitilliumWeb-SemiBold',
  semiBoldItalic: 'TitilliumWeb-SemiBoldItalic',
  nasa: 'Nasa',
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 4,
  },
};

export {COLORS, FONT, SIZES, SHADOWS};
