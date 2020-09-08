import React from 'react';
import GlobalState from './global/GlobalState';
import AuthProvider from './auth/AuthProvider';
import LocaProvider from './localization/LocaProvider';
import ContentProvider from './content/ContentProvider';
import ModalProvider from './modal/ModalProvider';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Normalize from '../styles/Normalize';
import GlobalStyles from '../styles/Global';
import { BrowserRouter } from 'react-router-dom';

const Providers = ({ children }) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalState>
        <AuthProvider>
          <LocaProvider>
            <ContentProvider>
              <ModalProvider>
                <Normalize />
                <GlobalStyles />
                {children}
              </ModalProvider>
            </ContentProvider>
          </LocaProvider>
        </AuthProvider>
      </GlobalState>
    </ThemeProvider>
  </BrowserRouter>
);

export default Providers;