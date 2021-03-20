import React from 'react';
import { ThemeProvider } from 'react-jss';

// App
import './reset.css';
import theme from '../theme';
import Home from '../Home';

const App = () =>
(
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;