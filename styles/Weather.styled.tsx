import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Division = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 125%;
  align-items: center;
`;

const Img = styled.img`
  width: 25%;
`;

const Wrapper = styled.div`
  width: 400px;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  padding: 1rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 1rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
`;

export { List, Division, H1, Img, Wrapper };
