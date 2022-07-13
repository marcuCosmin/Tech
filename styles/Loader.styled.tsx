import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid black;
  width: 120px;
  height: 120px;
  -webkit-animation: ${spin} 1s linear infinite; /* Safari */
  animation: ${spin} 1s linear infinite;
`;

export { Loader };
