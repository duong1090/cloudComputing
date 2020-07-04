import color from 'color';
import {Platform, Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

export const PLATFORM = {
  ANDROID: 'android',
  IOS: 'ios',
  MATERIAL: 'material',
  WEB: 'web',
};
//Guideline sizes are based on standard ~5" screen mobile device
const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height === 812 || width === 812);

const guidelineBaseWidth = 750;
const guidelineBaseHeight = 1334;
const ratio = width / guidelineBaseWidth;
const scale = (size) => ratio * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const platform = Platform.OS;
const platformStyle = undefined;
const fontFamily = 'Roboto-Regular';

const fontSize50 = scale(50); // 44px
const fontSize48 = scale(48); // 48px
const fontSize44 = scale(44); // 44px
const fontSize42 = scale(42); // 42px
const fontSize36 = scale(36); // 36px
const fontSize30 = scale(30); // 30px
const fontSize32 = scale(32); // 32px
const fontSize28 = scale(28); // 28px
const fontSize26 = scale(26); // 28px
const fontSize24 = scale(24); // 24px
const fontSize22 = scale(22); // 22px
const fontSize20 = scale(20); // 20px
const fontSize18 = scale(18); // 18px
const fontSizeExtraExtraLarge = fontSize44; //(platform === 'ios') ? 22 : 29; //44px :)
const fontSizeExtraLarge = scale(42); // (platform === 'ios') ? 21 : 28; //42px
const fontSizeMediumLarge = fontSize36; // (platform === 'ios') ? scale(34) : 23; //34px
const fontSizeLarge = fontSize32; //(platform === 'ios') ? scale(32) : scale(18); // 32px
const fontSizeBase = fontSize28; // (platform === 'ios') ? 14 : 15; // 28px
const fontSizeSmall = fontSize26; // (platform === 'ios') ? 13 : 14; //26px
const fontSizeMediumSmall = fontSize24; // (platform === 'ios') ? 12 : 13; //24px
const fontSizeExtraSmall = fontSize22; // (platform === 'ios') ? 10 : 12; //20px
const fontSizeExtraExtraSmall = fontSize20; // (platform === 'ios') ? 10 : 12; //20px

const ColorDanger = '#DF3651';
const ColorWarning = '#F6BE00';
const ColorBlue = '#007DC7';
const ColorPurple = '#FF93B3';
const ColorBorder = '#C8C8C8';
const ColorTextPrimary = '#3F3F3F';
const ColorTextSecondary = '#7E7E7E';
const ColorTextHint = '#BBBBBB';

const ColorMalachite = '#24A949'; //"#15B536";
const ColorGray11 = '#1C1C1C';
const ColorGray52 = '#858585';
const ColorGray92 = '#EBEBEB';
const ColorGray77 = '#c4c4c4';
const ColorGray73 = '#BABABA';
const ColorGray69 = '#B0B0B0';
const ColorGray97 = '#F7F7F7';
const ColorGrey = '#808080';
const ColorDustyGray = '#8B8B8B';
const ColorWhite = '#FFFFFF';
const ColorScorpion = '#5D5D5D';
const ColorMercury = '#E7E7E7';
const ColorBackgroundGray = '#F1F1F1';
const ColorReddish = '#E24F63';
const ColorBackgroundGray97 = '#F7F7F7';
const ColorMandy = '#E24F63';
const ColorMonza = '#D0011B';
const ColorSaffron = '#F9C02F';
const listProductPadding = scale(20);
const contentPadding = scale(30);
const listItemProductWidth =
  (width - 2 * contentPadding - listProductPadding) / 2;
const listItemCategoryWidth =
  (width - 2 * contentPadding - 2 * listProductPadding) / 3;
const categoryThumbnailWidth = listItemCategoryWidth;
const categoryThumbnailHeight = (listItemCategoryWidth * 3) / 4;
const productThumbnailWidth = listItemProductWidth;
const productThumbnailHeight = (productThumbnailWidth * 3) / 4;

export default {
  isIphoneX,
  deviceWidth: width,
  deviceHeight: height,
  platformStyle,
  platform,

  // AndroidRipple
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  buttonUppercaseAndroidText: true,
  fontFamily,
  scale,
  verticalScale,
  // Color
  brandWarning: '#fc782e', //'#F6A623',
  brandPrimary: ColorMalachite,
  brandDanger: ColorDanger,
  ColorWarning,
  ColorReddish,
  ColorPurple,
  ColorMalachite,
  ColorGray77,
  ColorGray11,
  ColorGray52,
  ColorGray69,
  ColorGray92,
  ColorGray97,
  ColorScorpion,
  ColorMercury,
  ColorGrey,
  ColorBackgroundGray,
  ColorBackgroundGray97,
  ColorWhite,
  ColorMandy,
  ColorMonza,
  ColorDanger,
  ColorSaffron,
  ColorGray73,
  ColorDustyGray,
  fontSize48,
  fontSize50,
  fontSize44,
  fontSize42,
  fontSize36,
  fontSize30,
  fontSize32,
  fontSize28,
  fontSize24,
  fontSize22,
  fontSize20,
  fontSize18,
  defaultBg: '#F1F1F1',
  // Font
  fontSizeExtraExtraLarge,
  fontSizeExtraLarge,
  fontSizeMediumLarge,
  fontSizeLarge,
  fontSizeBase,
  fontSizeSmall,
  fontSizeMediumSmall,
  fontSizeExtraSmall,
  fontSizeExtraExtraSmall,

  // Accordion
  headerStyle: '#edebed',
  iconStyle: '#000',
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  accordionBorderColor: ColorBorder,

  // ActionSheet
  elevation: 4,
  containerTouchableBackgroundColor: 'rgba(0,0,0,0.4)',
  innerTouchableBackgroundColor: '#fff',
  listItemHeight: 50,
  listItemBorderColor: 'transparent',
  marginHorizontal: -15,
  marginLeft: 14,
  marginTop: 15,
  minHeight: 56,
  padding: 15,
  touchableTextColor: '#757575',

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: platform === PLATFORM.IOS ? 3 : 0,

  // Button
  buttonFontFamily: 'Roboto-Medium',
  buttonDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
  get buttonPrimaryColor() {
    return this.inverseTextColor;
  },
  get buttonInfoBg() {
    return this.brandInfo;
  },
  get buttonInfoColor() {
    return this.inverseTextColor;
  },
  get buttonSuccessBg() {
    return this.brandSuccess;
  },
  get buttonSuccessColor() {
    return this.inverseTextColor;
  },
  get buttonDangerBg() {
    return this.brandDanger;
  },
  get buttonDangerColor() {
    return this.inverseTextColor;
  },
  get buttonWarningBg() {
    return this.brandWarning;
  },
  get buttonWarningColor() {
    return this.inverseTextColor;
  },
  get buttonTextSize() {
    return platform === PLATFORM.IOS
      ? this.fontSizeBase * 1.1
      : this.fontSizeBase - 1;
  },
  get buttonTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get buttonTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: ColorBorder,
  cardItemPadding: platform === PLATFORM.IOS ? 10 : 12,

  // CheckBox
  CheckboxRadius: platform === PLATFORM.IOS ? 13 : 0,
  CheckboxBorderWidth: platform === PLATFORM.IOS ? 1 : 2,
  CheckboxPaddingLeft: platform === PLATFORM.IOS ? 4 : 2,
  CheckboxPaddingBottom: platform === PLATFORM.IOS ? 0 : 5,
  CheckboxIconSize: platform === PLATFORM.IOS ? 21 : 16,
  CheckboxIconMarginTop: platform === PLATFORM.IOS ? undefined : 1,
  CheckboxFontSize: platform === PLATFORM.IOS ? 23 / 0.9 : 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',

  // Color
  brandInfo: ColorMalachite,
  brandSuccess: ColorMalachite,
  brandDark: '#000',
  brandLight: '#f4f4f4',

  // Container
  containerBgColor: 'transparent',

  // Date Picker
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // FAB
  fabWidth: 56,

  // Font
  DefaultFontSize: fontSizeBase,
  fontSizeBase: fontSizeBase,

  // Footer
  footerHeight: 55,
  footerDefaultBg: platform === PLATFORM.IOS ? '#F8F8F8' : '#3F51B5',
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: ColorTextPrimary,
  tabBarTextSize: platform === PLATFORM.IOS ? 14 : 11,
  activeTab: '#fff',
  sTabBarActiveTextColor: ColorMalachite,
  tabBarActiveTextColor: ColorMalachite,
  tabActiveBgColor: '#fff',

  // Header
  searchBarInputHeight: platform === PLATFORM.IOS ? 30 : 50,
  toolbarBtnTextColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hex();
  },

  // Line Height
  buttonLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,

  // List
  listBg: 'transparent',
  listTextSize: fontSize30,
  listNoteColor: '#808080',
  listNoteSize: 13,
  listItemSelected: platform === PLATFORM.IOS ? '#007aff' : '#3F51B5',

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: platform === PLATFORM.IOS ? 25 : 23,
  radioSelectedColorAndroid: '#3F51B5',
  radioBtnLineHeight: platform === PLATFORM.IOS ? 29 : 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: ColorWhite,
  segmentActiveBackgroundColor: ColorMalachite,
  segmentTextColor: ColorMalachite,
  segmentActiveTextColor: '#fff',
  segmentBorderColor: ColorMalachite,
  segmentBorderColorMain: '#3F51B5',

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tab
  tabDefaultBg: '#fff',
  topTabBarTextColor: ColorTextPrimary,
  topTabBarActiveTextColor: ColorMalachite,
  topTabBarBorderColor: '#fff',
  topTabBarActiveBorderColor: ColorMalachite,

  // Text
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Other
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  inputGroupRoundedBorderRadius: 30,

  get fontSizeH1() {
    return fontSizeExtraExtraLarge;
  },
  get fontSizeH2() {
    return fontSizeExtraLarge;
  },
  get fontSizeH3() {
    return fontSizeMediumLarge;
  },

  // Text
  textColor: ColorTextPrimary,
  textColorSecondary: ColorTextSecondary,
  textColorHint: ColorTextHint,
  inverseTextColor: '#fff',
  lineHeight: platform === 'ios' ? 20 : 24,

  // Title
  titleFontfamily: 'iCielPanton-Bold',
  titleFontSize: fontSize36,
  titleFontColor: ColorTextPrimary,
  subTitleFontSize: fontSizeSmall, //(platform === 'ios') ? 12 : 14,
  subtitleColor: ColorTextSecondary,

  // // Header
  toolbarBtnColor: ColorMalachite,
  toolbarDefaultBg: ColorWhite,
  toolbarHeight: platform === 'ios' ? scale(140) : scale(100),
  toolbarIconSize: platform === 'ios' ? 20 : 22,
  toolbarIconColor: ColorWhite,
  toolbarSearchIconSize: platform === 'ios' ? 20 : 23,
  toolbarInputColor: platform === 'ios' ? '#CECDD2' : '#fff',
  searchBarHeight: platform === 'ios' ? 30 : 40,
  toolbarInverseBg: '#222',
  toolbarTextColor: ColorTextPrimary,
  iosStatusbar: 'dark-content',
  toolbarDefaultBorder: '#c9c9c9',
  toolbarPaddingTop: platform === 'ios' ? scale(40) : 0,

  get statusBarColor() {
    return this.toolbarDefaultBg;
  },

  //bottom tab
  bottomTabIconColor: '#3F3F3F',
  bottomTabSelectedIconColor: ColorMalachite,

  borderColor: ColorBorder,
  // List
  listBorderColor: ColorBorder,
  listDividerBg: ColorBackgroundGray,
  listItemHeight: scale(100),
  listBtnUnderlayColor: '#DDD',
  listItemPadding: contentPadding,
  listItemHPadding: contentPadding,
  listProductPadding: listProductPadding,
  listItemProductWidth: listItemProductWidth,
  productThumbnailWidth: productThumbnailWidth,
  listItemCategoryWidth: listItemCategoryWidth,
  productThumbnailHeight: productThumbnailHeight,
  categoryThumbnailWidth: categoryThumbnailWidth,
  categoryThumbnailHeight: categoryThumbnailHeight,

  //card

  cardBorderRadius: scale(10),

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === 'ios' ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: platform === 'ios' ? 34 : 24,

  iconBackSize: 17,

  // Tabs
  tabBgColor: ColorWhite,
  tabFontSize: 15,
  tabTextColor: ColorTextPrimary,

  // Other
  borderRadiusBase: platform === 'ios' ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: contentPadding,

  thumbnalEmptySize: 300,
  isScreenVertical: height > width ? true : false,
  //Temp need to config
  // // InputGroup
  inputFontSize: fontSizeBase,
  inputBorderColor: ColorBorder,
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputRounderRadius: scale(10),
  //button
  btnDisabledBg: '#b5b5b5',
  buttonPadding: 0,

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 50,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },

  //icon
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  // iPhoneX SafeArea
  Inset: isIphoneX
    ? {
        portrait: {
          topInset: 24,
          leftInset: 0,
          rightInset: 0,
          bottomInset: 34,
        },
        landscape: {
          topInset: 0,
          leftInset: 44,
          rightInset: 44,
          bottomInset: 21,
        },
      }
    : {
        portrait: {
          topInset: 0,
          leftInset: 0,
          rightInset: 0,
          bottomInset: 0,
        },
        landscape: {
          topInset: 0,
          leftInset: 0,
          rightInset: 0,
          bottomInset: 0,
        },
      },
};
