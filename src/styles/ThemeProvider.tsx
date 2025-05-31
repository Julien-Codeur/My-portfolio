import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme } from './theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  );
}; 