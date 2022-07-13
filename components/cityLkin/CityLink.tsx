import React from 'react';

import { cityLinkProps } from './Interfaces';

import { A } from '../../styles/Search.styled';

import Link from 'next/link';

export default function CityLink(props: cityLinkProps) {
  return (
    <li>
      <Link href={`/${props.city}`}>
        <A>{[props.city, props.country].join(' ')}</A>
      </Link>
    </li>
  );
}
