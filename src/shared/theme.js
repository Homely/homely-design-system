// Colors.
const colors = {
  grayBase: '#3C515B', // Master Grey
  grayLighter2: '#F8F8F8',
  grayLight2: '#E0E3E5', // Light Grey 2
  headerText: '#343D42', // $color-grayDark
  bodyText: '#475A6B',
  whiteBase: '#fff',
  redBase: '#FD4974', // Master Pink
  line: '#b7c1d2',
  // button: {
  //   hoverRed: '#d33d62',
  // },
  border2: '#E9ECF1',
  homelyConnectDark: '#1B223F',
  grayPlaceholder: '#95A4A7',
  blueLight: '#DFE8EE'
};

const linearGradient = (start, end) => {
  return `linear-gradient(228deg, ${start} 0%, ${end} 100%)`;
};
const gradients = {
  new: linearGradient('#fd6d90', '#ff3fdd'),
  sold: linearGradient('#fdbc50', '#fd6d90'),
  leased: linearGradient('#08e6f8', '#f223f2')
};

// Type.
const fontFamily = 'objektiv';

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
};

// const fontSizes = {};
// const lineHeights = {};

// Spacing.
const spacing = [
  0,
  4,
  8,
  12,
  16,
  20,
  24,
  28,
  32,
  36,
  40,
  44,
  48,
  52,
  56,
  60,
  64,
  80,
  96,
  112,
  128
];

// Breakpoints.
const breakpoints = {
  // micro: '321px',
  // tiny: '480px',
  small: '641px',
  // medium: '720px',
  // desktop: '769px',
  // large: '960px',
  larger: '1025px'
  // xlarge: '1281px',
  // jumbo: '1921px',
  // home: '1044px',
};

// Sizes.
const sizes = {
  headerHeight: 72,
  footerHeightDesktop: 100,
  footerHeightMobile: 208
};

// Misc.
const shadows = {
  card: '0 6px 12px 0 rgba(0, 0, 0, 0.15)'
};

// z-index.
// const zindex = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000];

const theme = {
  colors,
  gradients,
  fontFamily,
  fontWeights,
  // fontSizes,
  // lineHeights,
  spacing,
  breakpoints,
  sizes,
  shadows
  // zindex,
};

export default theme;
