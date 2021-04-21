import React from 'react';
import {GetServerSideProps, NextPage} from 'next';
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

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      message: 'Hello World',
    },
  };
};

export default Index;
