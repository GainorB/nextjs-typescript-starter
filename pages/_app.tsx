import React from 'react';
import {NextPageContext} from 'next';
import {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';

// GLOBAL COMPONENTS
import DefaultHead from '../components/core/head';
import Header from '../components/header';
import Footer from '../components/footer';
import {AppWrapper} from '../components/layouts/wrappers';
import {AppContainer, Children} from '../components/layouts/containers';

// THEME
import {theme} from '../theme/theme';
import {ThemeProvider} from '../theme';
import {GlobalStyle} from '../theme/global';

interface Props extends AppProps {
  store: any;
  ctx: NextPageContext;
}

const GlobalLayout = ({children}: {children: React.ReactNode}) => (
  <AppWrapper>
    <DefaultHead title="" />
    <GlobalStyle />
    <Header />
    <AppContainer>
      <Children>{children}</Children>
    </AppContainer>
    <Footer />
  </AppWrapper>
);

const Application = ({Component, pageProps, store}: Props) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </Provider>
  </ThemeProvider>
);

Application.getInitialProps = async ({Component, ctx}: Props) => {
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
  };
};

export default withRedux(initStore)(Application);
