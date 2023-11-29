import {Dimensions, StyleSheet} from 'react-native';

export const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
export const HORIZON_MARGIN = 15;

export const LIGHT = 'light';
export const DARK = 'dark';
export const Theme = LIGHT | DARK;

export const COMMON_COLORS = {
  black: '#212121',
  white: '#fff',
  // primary: '#A0A2F0',
  // secondary: '#4448AE',
  // primary:'#3D0354',
  // secondary:'#3D0354',
  gradientPurple:'#3D0354',
  gradientBlue:'#565DD4',
  primary: '#7200BC',
  secondary: '#5D4DC3',
  glassBlack: 'rgba(0,0,0,0.5)',
  gray: '#E5E5E5',
  lightgray: '#616161',
  bgColor: '#D0CBF1',
  steelGrey: '#EBEAFA',
  transparent: 'transparent',
  textInputGrey: '#F8F7FD',
  splashBg: '#9C9FF0',
};

export const COLORS = {
  light: {
    ...COMMON_COLORS,
    input: '#F8F7FD',
    red: '#AE0000',
    background: '#fff',
    text: '#212121',
    shade: '#D9D1D1',
    statusbar: '#fff',
    grey: '#777777',
    OTPInput: '#E5E9F98F',
    inputBorder: '#4448AE',
    placeholderTextColor: 'grey',
    shadow: 'black',
    focusedIcon: '#4448AE',
    unfocusedIcon: 'grey',
    termsText: 'grey',
  },

  dark: {
    ...COMMON_COLORS,
    input: '#25241E',
    background: '#14130E',
    shadow: 'white',
    text: 'white',
    statusbar: '#000',
    focusedIcon: 'white',
    unfocusedIcon: 'grey',
    inputBorder: 'grey',
    placeholderTextColor: 'grey',
    termsText: 'white',
  },
};

export const FONTS = {
  primaryBold: 'Arial',
  primaryMedium: 'Arial',
  primarySemi: 'Arial',
  primaryRegular: 'Arial',
};

export const Fonts = {
  mavenRegular: 'MavenPro-Regular',
  merriWeatherSansRegular: 'MerriweatherSans-Regular',
  merriWeatherBold: 'Merriweather-Bold',
  latoRegular: 'Lato-Regular',
  pacificoRegular: 'Pacifico-Regular',
};
// Typography
export const TYPOGRAPHY = StyleSheet.create({
  h1: {
    fontSize: 35,
    fontFamily: FONTS.primaryBold,
  },
  h2: {
    fontSize: 20,
    fontFamily: FONTS.primaryMedium,
  },
  h3: {
    fontSize: 18,
    fontFamily: FONTS.primaryMedium,
  },
  h4: {
    fontSize: 16,
    fontFamily: FONTS.primarySemi,
  },
  h5: {
    fontSize: 14,
    fontFamily: FONTS.primaryMedium,
  },
  h6: {
    fontSize: 12,
    fontFamily: FONTS.primaryMedium,
  },
  h7: {
    fontSize: 10,
    fontFamily: FONTS.primaryBold,
  },
  body1: {
    fontSize: 14,
    fontFamily: FONTS.primaryRegular,
  },
  body2: {
    fontSize: 12,
    fontFamily: FONTS.primaryRegular,
  },
  body3: {
    fontSize: 10,
    fontFamily: FONTS.primaryRegular,
  },
});

// Global Styles
export const STYLES = StyleSheet.create({
  position: position => ({position}),
  left: left => ({left}),
  right: right => ({right}),
  top: top => ({top}),
  bottom: bottom => ({bottom}),
  margin: margin => ({margin}),
  mL: marginLeft => ({marginLeft}),
  mR: marginRight => ({marginRight}),
  mT: marginTop => ({marginTop}),
  mB: marginBottom => ({marginBottom}),
  mH: marginHorizontal => ({marginHorizontal}),
  mV: marginVertical => ({marginVertical}),
  padding: padding => ({padding}),
  pB: paddingBottom => ({paddingBottom}),
  pT: paddingTop => ({paddingTop}),
  pL: paddingLeft => ({paddingLeft}),
  pR: paddingRight => ({paddingRight}),
  pH: paddingHorizontal => ({paddingHorizontal}),
  pV: paddingVertical => ({paddingVertical}),
  height: (height = '0%') => ({height}),
  width: (width = '0%') => ({width}),
  color: color => ({color}),
  bgColor: backgroundColor => ({backgroundColor}),
  flex: flex => ({flex}),
  textTransform: textTransform => ({textTransform}),
  textAlign: align => ({textAlign: align}),
  textDecorationLine: value => ({textDecorationLine: value}),
  alignSelf: alignSelf => ({alignSelf}),
  fontSize: fontSize => ({fontSize}),
  maxHeight: maxHeight => ({maxHeight}),
  borderWidth: borderWidth => ({borderWidth}),
  flexGrow: flexGrow => ({flexGrow}),
  widthHeight: (width = 0, height = 0) => ({width, height}),
  flexWrap: wrap => ({flexWrap: wrap}),
  fontFamily: family => ({fontFamily: family}),
  bR: bR => ({borderRadius: bR}),
  minHeight: minHeight => ({minHeight}),
  bC: bC => ({borderColor: bC}),
  fullWidth: {width: '100%'},
  JCStart: {justifyContent: 'flex-start'},
  JCEnd: {justifyContent: 'flex-end'},
  JCCenter: {justifyContent: 'center'},
  JCAround: {justifyContent: 'space-around'},
  JCBt: {justifyContent: 'space-between'},
  JCEvenly: {justifyContent: 'space-evenly'},
  AIStart: {alignItems: 'flex-start'},
  AIEnd: {alignItems: 'flex-end'},
  AICenter: {alignItems: 'center'},
  selfRight: {alignSelf: 'flex-end'},
  selfLeft: {alignSelf: 'flex-start'},
  selfCenter: {alignSelf: 'center'},
  row: {flexDirection: 'row'},
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  spbw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenterBt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  centerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hitSlop: {
    top: 15,
    bottom: 15,
    right: 15,
    left: 15,
  },
  shadow: {
    shadowColor: COLORS.light.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  modalShadow: {
    shadowColor: COLORS.light.black,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  flex1: {flex: 1},
  jcStart: {justifyContent: 'flex-start'},
  width100: {
    width: '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: HORIZON_MARGIN,
  },
});
