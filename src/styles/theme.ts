import type { ChakraProps } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: ChakraProps) => ({
    body: {
      bg: mode('#f9fafb', '#202023')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: ChakraProps) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const colors = {
  grassTeal: '#88ccca',
  github: {
    50: '#f5f5f5',
    100: '#ebebeb',
    200: '#cccccc',
    300: '#adadad',
    400: '#707070',
    500: '#333333',
    600: '#2e2e2e',
    700: '#262626',
    800: '#1f1f1f',
    900: '#191919',
  },
  polywork: {
    50: '#f5f5f5',
    100: '#ece9fb',
    200: '#c5bdf4',
    300: '#9e92ed',
    400: '#7766e6',
    500: '#503adf',
    600: '#3720c5',
    700: '#1e126d',
    800: '#120b42',
    900: '#060416',
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ colors, components, styles, config });

export default theme;
