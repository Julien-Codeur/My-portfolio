import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
      background: {
        dark: string;
        darker: string;
        light: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      success: string;
      error: string;
      warning: string;
      border: string;
      surface: string;
    };
    fonts: {
      display: string;
      body: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      large: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
  }
}

/** Ink & Lagoon — light editorial, no purple / neon / glow. */
export const theme = {
  colors: {
    primary: {
      main: '#0B6E6A',
      light: '#148F89',
      dark: '#085552',
    },
    secondary: {
      main: '#243447',
      light: '#3A4D63',
      dark: '#161F2B',
    },
    background: {
      darker: '#E8EEF2',
      dark: '#F4F7F9',
      light: '#D7DEE5',
    },
    text: {
      primary: '#101418',
      secondary: '#5A6570',
    },
    success: '#1F7A4C',
    error: '#B42318',
    warning: '#B54708',
    border: '#C9D2DB',
    surface: '#FFFFFF',
  },
  fonts: {
    display: "'Syne', sans-serif",
    body: "'IBM Plex Sans', sans-serif",
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    large: '1200px',
  },
  shadows: {
    small: 'none',
    medium: 'none',
    large: 'none',
  },
  borderRadius: {
    small: '4px',
    medium: '6px',
    large: '10px',
  },
};

export type Theme = typeof theme;
