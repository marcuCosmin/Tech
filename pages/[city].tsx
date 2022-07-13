import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import { Weather } from '../components/exports';

import { MainElement } from '../styles/Home.styled';
import { A } from '../styles/Search.styled';

import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';

export default function City() {
  const router = useRouter();
  const email = useSelector((state: RootState) => state.email);

  useEffect(() => {
    !email.length && router.push('/');
  });

  return (
    <MainElement>
      <Head>
        <title>{router.query.city}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Weather option={router.asPath.replace('/', '')} />;
      <Link href="/">
        <A>Home</A>
      </Link>
    </MainElement>
  );
}
