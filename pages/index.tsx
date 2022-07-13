import type { NextPage } from 'next';

import Head from 'next/head';

import { Auth, Search, Weather } from '../components/exports';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { Wrapper, MainElement } from '../styles/Home.styled';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainElement>
        {useSelector((state: RootState) => state.email).length ? (
          <>
            <Weather />
            <Search />
          </>
        ) : (
          <Auth />
        )}
      </MainElement>
    </Wrapper>
  );
};

export default Home;
