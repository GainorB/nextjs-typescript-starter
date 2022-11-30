import React from 'react';
import {NextPageContext} from 'next';
import {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components'
import { GlobalStyle} from '../src/theme/global';
import { theme} from '../src/theme/theme';
import {
  AppWrapper,
  Header,
  AppContainer,
  Footer,
  Children,
  Head as DefaultHead,
} from '../src/components';

interface Props extends AppProps {
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

const Application = ({Component, pageProps}: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  </ThemeProvider>
);

Application.getInitialProps = async ({Component, ctx}: Props) => {
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
  };
};

export default Application;
