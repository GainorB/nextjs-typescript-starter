import React from 'react';
import {NextPage} from 'next';
import Head from '../components/core/head';
import {Page} from '../components/layouts/containers';

interface IndexPageProps {
  message?: string;
}

const Index: NextPage<IndexPageProps> = ({message}) => {
  return (
    <Page>
      <Head title="Home" />
      {message}
    </Page>
  );
};

Index.getInitialProps = async () => {
  return {
    message: 'Hello World',
  };
};

export default Index;
