export interface ThemeProps {
  background: string;
  text: string;
}

export const darkTheme: ThemeProps = {
  background: 'var(--dark-background)',
  text: 'var(--dark-text)',
};

export const lightTheme: ThemeProps = {
  background: 'var(--light-background)',
  text: 'var(--light-text)',
};

export const Colors = {
  brand: {
    default: '#233D4D',
  },
  font: {
    default: '#233D4D',
  },
  border: {
    default: '#30556B',
  },
  hover: {
    default: '#5f869a',
  },
  active: {
    default: 'hsla(199, 17%, 72%, 1)',
  },
  neutral: {
    100: '#FFFFFF',
    200: '#F2F2F2',
    250: '#DDDDDD',
    260: '#D3D3D3',
    280: '#D8E2DC',
    300: '#999999',
    400: '#7C7C7C',
    500: '#666666',
    600: '#333333',
    700: '#231F20',
    900: '#000000',
    '900_Modal': 'rgba(0, 0, 0, 0.6)',
  },
};

export const Size = {
  default: {
    height: {
      100: '100%',
    },
    width: {},
    100: '100%',
    20: '20px',
  },
  radius: '5px',

  footer: {
    width: '289px',
  },

  sidebar: {
    height: {
      100: '100%',
    },
    width: {
      default: '289px',
    },
  },
  fonts: {
    title: '20px',
    buttons: '18px',
    heading: '22px',
  },
};
