import { ThemeProvider } from 'react-jss';

// App
import './reset.css';
import theme from '../theme';
import Home from '../Home';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;