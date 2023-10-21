import React from 'react';
import Routes from './Routes';
import GlobalStyle from './theme/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme/index';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
