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

export const theme = {
  colors: {
    primary: {
      main: '#007bff',
      light: '#3391ff',
      dark: '#0056b3',
    },
    secondary: {
      main: '#00ff88',
      light: '#33ff9f',
      dark: '#00cc6d',
    },
    background: {
      dark: '#121212',
      darker: '#1e1e1e',
      light: '#2d2d2d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
    success: '#28a745',
    error: '#dc3545',
    warning: '#ffc107',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    large: '1200px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
};

export type Theme = typeof theme; 