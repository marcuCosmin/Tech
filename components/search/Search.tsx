import React, { useState, useEffect } from 'react';

import {
  Wrapper,
  CitiesList,
  SearchInput,
  SearchContainer,
  SearchButton,
  CityError,
} from '../../styles/Search.styled';
import { Loader } from '../../styles/Loader.styled';

import { City } from '../../services/Interfaces';

import { getCities } from '../../services/api';
import { upperCaseFirstChars } from '../../services/functions';

import CityLink from '../cityLkin/CityLink';

export default function Search() {
  const [cities, setCities] = useState<City[]>([]);
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!input.length) getCities(input).then(result => setCities(result));
  }, [input]);

  return (
    <Wrapper>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search a city"
          theme={{
            border: '0.5px solid black',
            shadow: '0 0 0.5rem 0.20rem #00000090',
          }}
          value={input}
          onChange={e => {
            setInput(upperCaseFirstChars(e.target.value));
            setError('');
          }}
        />
        <SearchButton
          type="button"
          value="Search"
          onClick={() =>
            getCities(input).then(result =>
              result.length ? setCities(result) : setError('City not found')
            )
          }
        />
      </SearchContainer>

      {error.length ? (
        <CityError>{error}</CityError>
      ) : (
        <CitiesList>
          {cities.length ? (
            cities.map(city => {
              console.log(city);
              return (
                <CityLink
                  key={city.id + city.name}
                  city={city.name}
                  country={city.country}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </CitiesList>
      )}
    </Wrapper>
  );
}
