import styled from 'styled-components';

import { Error, Input } from './Auth.styled';

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CitiesList = styled.ul`
  margin-top: 2rem !important;
  display: flex;
  justify-content: center;
  list-style: none;
  border: none;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const A = styled.a`
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.15s;
  border-radius: 0.3rem;
  text-decoration: none !important;
  color: black;
  text-decoration: none !important;
  transition: 0.15s;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const SearchInput = styled(Input)`
  border: 0.5px solid black;
  font-size: 120%;
  border-right: none;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  box-shadow: none !important;
`;

const SearchButton = styled(SearchInput)`
  border-bottom-right-radius: 0.35rem;
  border-top-right-radius: 0.35rem;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-right: 0.5px solid black;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  transition: 0.3s;
  border-radius: 0.35rem;
  display: flex;
  &:focus-within {
    box-shadow: 0 0 0.5rem 0.2rem #00000090;
  }
`;

const CityError = styled(Error)`
  font-size: 120%;
  font-weight: bold;
`;

export {
  Wrapper,
  CitiesList,
  SearchInput,
  SearchContainer,
  SearchButton,
  CityError,
  A,
};
