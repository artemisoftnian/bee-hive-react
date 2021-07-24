
import './App.css';

import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import { AuthProvider } from './context/AuthContext';

import theme from './theme';
import Routes from './Routes';

function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
