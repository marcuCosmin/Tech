import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`;

const Input = styled.input`
  padding: 0.5rem;
  outline: none !important;
  transition: 0.3s;
  border-radius: 0.3rem;
  background: transparent;
  border: ${props => props.theme.border};
  &:focus {
    box-shadow: ${props => props.theme.shadow};
  }
`;

const H1 = styled.h1`
  margin-top: 0;
  user-select: none;
  margin-bottom: 1rem;
`;

const Button = styled(Input)`
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  user-select: none;
  width: 100%;
`;

const Error = styled.div`
  font-size: 90%;
  color: #dc3545;
  margin-top: 1rem;
`;

export { Input, Form, H1, Button, Error };
