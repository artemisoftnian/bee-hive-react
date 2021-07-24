
import './App.css';

import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import  UserProvider  from './providers/UserProvider';

import theme from './theme';
import Routes from './app/Routes';

function App() {

  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
