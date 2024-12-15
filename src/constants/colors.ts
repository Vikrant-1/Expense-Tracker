import {DynamicValue} from 'react-native-dynamic';

// Static Colors
export const WHITE = '#FFF';
export const BLACK = '#000';
export const BLACK_40 = 'rgba(0, 0, 0, 0.4)';
export const TRANSPARENT = 'transparent';

// Theme Object with Dynamic Colors
export const THEME = {
  primary: {
    DEFAULT: new DynamicValue('#0A3357', '#218ae5'), // Light: Prussian Blue, Dark: Light Prussian Blue
    light: new DynamicValue('#218ae5', '#041423'),
    dark: new DynamicValue('#041423', '#0A3357'),
  },
  secondary: {
    DEFAULT: new DynamicValue('#1EAD99', '#63e3d2'), // Light: Keppel, Dark: Light Keppel
    light: new DynamicValue('#63e3d2', '#0c453e'),
    dark: new DynamicValue('#0c453e', '#1EAD99'),
  },
  accent: {
    DEFAULT: new DynamicValue('#EF8249', '#F29B6D'), // Light: Orange Theme, Dark: Light Orange
    light: new DynamicValue('#F29B6D', '#722f0a'),
    dark: new DynamicValue('#722f0a', '#EF8249'),
  },
  background: {
    DEFAULT: new DynamicValue('#D4E4D8', '#06233F'), // Light: Honeydew, Dark: Oxford Blue
    light: new DynamicValue('#D4E4D8', '#06233F'),
    dark: new DynamicValue('#06233F', '#D4E4D8'),
  },
  text: {
    primary: new DynamicValue('#000', '#FFF'), // Light: Black, Dark: White
    secondary: new DynamicValue('#5B686E', '#DDE1E3'), // Light: Payne Gray, Dark: Light Gray
    placeholder: new DynamicValue('rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)'),
  },
  border: {
    DEFAULT: new DynamicValue('#C4D9CF', '#5B686E'), // Light: Ash Gray, Dark: Payne Gray
    light: new DynamicValue('#C4D9CF', '#5B686E'),
    dark: new DynamicValue('#5B686E', '#C4D9CF'),
  },
  success: {
    DEFAULT: new DynamicValue('#118886', '#40E7E5'), // Light: Dark Cyan, Dark: Light Cyan
    light: new DynamicValue('#40E7E5', '#073636'),
    dark: new DynamicValue('#073636', '#118886'),
  },
  danger: {
    DEFAULT: new DynamicValue('#EF4444', '#FCA5A5'), // Light: Red, Dark: Light Red
    light: new DynamicValue('#FCA5A5', '#B91C1C'),
    dark: new DynamicValue('#B91C1C', '#EF4444'),
  },
};

// Example Android Ripple with Dynamic Colors
export const androidRipple = {
  color: '#1EAD99',
  borderless: false,
  radius: 70,
  foreground: false,
};
