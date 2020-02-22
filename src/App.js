import React from 'react';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from '@material-ui/styles';

import 'react-tiger-transition/styles/main.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { theme } from './styles/theme';
import store from './store';
import Routes from './routes';

import GlobalStyled from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyled />
        <Routes />
        <ToastContainer
          autoClose={8000}
          closeButton={false}
          pauseOnHover
          position="bottom-right"
        />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
