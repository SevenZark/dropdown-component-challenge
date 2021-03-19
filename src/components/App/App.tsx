import React from 'react';
import { ThemeProvider } from 'react-jss';

// App
import './reset.css';
import theme from '../theme';
import Home from '../Home';

const groupOptions = ["singers", "actors", "athletes"]
const singerOptions = ["beyonce", "bob dylan", "taylor swift", "prince"]
const actorOptions = ["will smith", "kristen bell", "daniel radcliffe", "eva longoria"]
const athleteOptions = ["payton manning", "steph curry", "serena williams", "tiger woods"]

const App = () =>
(
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;